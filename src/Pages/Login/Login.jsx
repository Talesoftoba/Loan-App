import diamondIcon from '../../assets/diamond-icon.png'
import styles from "./Login.module.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faGoogle, faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';


  function Login(){

    const { login } = useAuth();
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
      email:"",
      password:"",
    });

    const [loading, setLoading] = useState(false);
    const[error, setError] = useState("");
  
    function handleChange(e){
      const {name, value} = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
    function handleLogin(e) {
  e.preventDefault();

  // 1️⃣ Validate inputs FIRST
  if (!formData.email || !formData.password) {
    setError("All fields are required");
    return;
  }

  if (
    formData.email !== "user@gmail.com" ||
    formData.password !== "123456"
  ) {
    setError("Invalid email or password");
    return;
  }

  // 2️⃣ Clear error and show loading
  setError("");
  setLoading(true);

  // 3️⃣ Simulate API delay
  setTimeout(() => {
    const response = {
      token: "jwt-token",
      user: {
        firstName: "Aisha",
        email: formData.email,
      },
    };

    // 4️⃣ NOW login + navigate
    login(response.user, response.token);
    setLoading(false);
    navigate("/dashboard");
  }, 1500);
}

    return(
         <div className={styles.loginContainer}>
          <div className={styles.loginLeft}>
            <form className={styles.loginBox} onSubmit={handleLogin} noValidate>
              <div className={styles.logo}> 
               <img src={diamondIcon} alt='sterling bank logo' className={styles.logoImg}/>
               <span className={styles.logoText}> Sterling Bank</span>
              </div>

              <h2 className={styles.title}> Secure Login </h2>
              <p className={styles.subtitle}>Welcome back! Please enter your details.</p>
             
             {error && (
              <div className={styles.errorBox}>
                <span className={styles.errorText}>{error}</span>
              </div>
             )}
               
              <input 
              type='email'
              name='email'
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
              required
              />

               <input 
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className={styles.inputField}
              required
              />

            <a href='#' className={styles.forgot} > Forgot password? </a>

            <button type='submit' className={styles.signIn} disabled={loading}> 
              {loading ? "Signing In..." : "Sign In"} </button>

              <div className={styles.divider}><span> Or continue with </span></div>

              {/*Social Button with Icons */}
              <div className={styles.socials}>
                <button
                type='button'
                className={`${styles.socialButton} ${styles.google}`}
                aria-label='sign in with google'
                >
                  <FontAwesomeIcon icon={faGoogle}
                  className={styles.socialIcon}/>
                  Google
                </button>

                 <button
                type='button'
                className={`${styles.socialButton} ${styles.facebook}`}
                aria-label='sign in with facebook'
                >
                  <FontAwesomeIcon icon={faFacebookF}
                  className={styles.socialIcon}/>
                  Facebook
                </button>
              </div>
            </form>
          </div>

          <div className={styles.loginRight}>
            <h1 className={styles.rightTitle}>Streamline Your Loan
                <span className={styles.processWord}>Process</span> </h1>

            <p className={styles.rightText}>
              Access your account to manage applications, tracks progress,
              and communication securely with our team.
            </p>
          </div>
         </div>

    );

  }
    export default Login;
