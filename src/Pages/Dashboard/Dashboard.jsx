import Sidebar from "../../Components/Sidebar"
import styles from "./Dashboard.module.css"
import { useAuth } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"



  function Dashboard(){

      const {user, logout} = useAuth();
      const navigate = useNavigate();

      function handleLogout(){
        logout();
        navigate("/login")
      }
       return(
             
               <div className={styles.dashboardLayout}>
                 <Sidebar/>
                <p>welcome, {user.firstName}</p>
                <button onClick={handleLogout}>Logout</button>

               </div>

       )
  }  
     export default Dashboard