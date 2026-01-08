import styles from "./Header.module.css";
import { useAuth } from "../../Context/AuthContext"

const Header = () => {

     const { user } = useAuth();
  return (
    <header className={styles.header}>
      <div>
        <h1>welcome, {user.firstName}</h1>
        <p>Here's an overview of your loan activities.</p>
      </div>

      <div className={styles.profile}>
        <span>🔔</span>
            <img src={user.avatar}/>
      </div>
    </header>
  );
};

export default Header;