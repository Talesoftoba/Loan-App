import { useAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

import styles from "./Sidebar.module.css";

const Sidebar = () => {
 const {logout} = useAuth();
      const navigate = useNavigate();

      function handleLogout(){
        logout();
        navigate("/login")
      }

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Sterling Bank</h2>

      <nav className={styles.menu}>
        <button className={styles.active}>Overview</button>
        <button>Applications</button>
        <button>Payments</button>
        <button>Statements</button>
      </nav>

      <div className={styles.links}>
         <h3> Quick Links </h3>
        <button>Loan Calculator</button>
        <button>Support</button>
        <button>FAQ</button>
        <button>Contact Us</button>
      </div>

 <button onClick={handleLogout}>Logout</button>   
  </aside>
  );
};

export default Sidebar;