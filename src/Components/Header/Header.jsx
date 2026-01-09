import styles from "./Header.module.css";
import { useAuth } from "../../Context/AuthContext"

import { Bell } from "lucide-react";


const Header = () => {
  const { user } = useAuth();

  return (
    <header className={styles.header}>
      <div>
        <h1>Welcome, {user?.firstName || "User"}</h1>
        <p>Here's an overview of your loan activities.</p>
      </div>

      <div className={styles.profile}>
        {/* 🔔 Bell */}
        <button className={styles.bell}>
          <Bell size={18} />
          <span className={styles.dot} />
        </button>
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt="avatar"
          className={styles.avatar}
        />
      </div>
    </header>
  );
};
  export default Header
  