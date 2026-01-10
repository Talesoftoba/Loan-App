import { useState } from "react";
import { Eye,EyeOff } from "lucide-react";
import styles from "./PasswordInput.module.css"

function PasswordInput({ 
    value, 
    onChange,
     name,
     placeholder,
     className,
    required , 

}) {
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className={styles.passwordWrapper}>
            <input 
             className={`${styles.input} ${className}`} 
            type={showPassword ? "text" : "password"}
            value= {value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            />

            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.eyeBtn}
              >
            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button>
        </div> 
        
    );

}export default PasswordInput;

