import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css"

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("New user created:", userCredential.user);

      // Optionally redirect to login page or dashboard
      navigate("/login");
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
    <form className={styles.signupForm} onSubmit={handleSignUp}>
      <h2 className={styles.title}>Sign Up</h2>
      <input
      className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
      className={styles.input}
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button 
       type="submit" 
       className={styles.submitBtn}
       disabled={loading}>
        {loading ? "Creating..." : "Sign Up"}
      </button>
      {error && (
      <div className={styles.errorBox}>
     <span className={styles.errorText}>{error}</span>
           </div>
         )}
    </form>
    </div>
  );
}

export default SignUp;