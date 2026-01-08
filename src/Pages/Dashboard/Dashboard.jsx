import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import QuickActions from "../../Components/QuickActions/QuickActions";
import Summary from "../../Components/Summary/Summary";
import RecentActivity from "../../Components/RecentActivity/RecentActivity";
import styles from "./Dashboard.module.css"





  function Dashboard(){

     
       return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.main}>
        <Header />

        <QuickActions />

        <div className={styles.bottomGrid}>
          <Summary />
          <RecentActivity />
        </div>
        
      </main>
      
    </div>
  );
  }  
     export default Dashboard