import diamondIcon from '../../assets/diamond-icon.png'
import styles from "./Login.module.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faGoogle, faFacebookF} from "@fortawesome/free-brands-svg-icons"


  function Login(){
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
    function handleSubmit(e){
      e.preventDefault();

      if(!formData.email || !formData.password){
        setError("All feilds are required");
        return;
      }
      
      setError("");
      setLoading(true);

     

    setTimeout(()=>{
      console.log("Login data:", formData);
      setLoading(false);
    },1500);

    }

    return(
         <div className={styles.loginContainer}>
          <div className={styles.loginLeft}>
            <form className={styles.loginBox} onSubmit={handleSubmit} noValidate>
              <div className={styles.logo}> 
               <img src={diamondIcon} alt='sterling bank logo' className={styles.logoImg}/>
               <span className={styles.logoText}> Sterling Bank</span>
              </div>

              <h2 className={styles.title}> Secure Login </h2>
              <p className={styles.subtitle}>Welcome back! Please enter your details.</p>
              {error && <p className={styles.error}>{error}</p>}

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
