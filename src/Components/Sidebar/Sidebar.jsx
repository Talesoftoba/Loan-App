import { useAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

import styles from "./Sidebar.module.css";
import diamondIcon from '../../assets/diamond-icon.png'

import {
  LayoutDashboard,
  FileText,
  CreditCard,
  Receipt,
  Calculator,
  Headphones,
  HelpCircle,
  Mail,
} from "lucide-react";

const Sidebar = () => {
 const {logout} = useAuth();
      const navigate = useNavigate();

      function handleLogout(){
        logout();
        navigate("/login")
      }

  return (
    <aside className={styles.sidebar}>
     <div className={styles.logo}> 
               <img src={diamondIcon} alt='sterling bank logo' className={styles.logoImg}/>
               <span className={styles.logoText}> Sterling Bank</span>
              </div>

              <nav clasName={styles.mainNav}>
<button className={`${styles.link} ${styles.active}`}>
          <LayoutDashboard size={18} />
          Overview
        </button>

        <button className={styles.link}>
          <FileText size={18} />
          Applications
        </button>

        <button className={styles.link}>
          <CreditCard size={18} />
          Payments
        </button>

        <button className={styles.link}>
          <Receipt size={18} />
          Statements
        </button>
      </nav>

      <div className={styles.spacer}>
         <h3>Quick Links</h3> </div>

      {/* Secondary Navigation */}
      <nav className={styles.secondaryNav}>
        <button className={styles.link}>
          <Calculator size={18} />
          Loan Calculator
        </button>

        <button className={styles.link}>
          <Headphones size={18} />
          Support
        </button>

        <button className={styles.link}>
          <HelpCircle size={18} />
          FAQ
        </button>

        <button className={styles.link}>
          <Mail size={18} />
          Contact Us
        </button>

 <button className={styles.logoutButton}
 onClick={handleLogout}>Logout</button>   
  </nav>
  </aside>
  );
};

export default Sidebar;