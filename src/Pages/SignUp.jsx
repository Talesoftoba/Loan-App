import React, { useState } from "react";
import { createUserWithEmailAndPassword,
  updateProfile
 } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css"

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
     firstName:"",
     lastName:"",
    email: "",
   password: "", 
    });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.password) {
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

      // 2️⃣ Generate auto avatar URL using DiceBear initials
      const avatarURL = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        formData.firstName
      )}`;

      //save first name to firebase
      await updateProfile(userCredential.user, {
        displayName:formData.firstName,
        photoURL:avatarURL,
      });

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
     <div className={styles.nameRow}>
      <input 
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      />
      <input 
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      />
      </div>
      
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