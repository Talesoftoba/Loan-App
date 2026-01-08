import { FileText, Wallet, CheckCircle } from "lucide-react";
import ActivityItem from "./ActivityItem";
import styles from "./RecentActivity.module.css";

const activities = [
  {
    title: "Loan Application Submitted",
    time: "2 days ago",
    icon: FileText,
    color: "blue",
  },
  {
    title: "Payment Received",
    time: "1 week ago",
    icon: Wallet,
    color: "green",
  },
  {
    title: "Loan Approved",
    time: "2 weeks ago",
    icon: CheckCircle,
    color: "blue",
  },
];

const RecentActivity = () => {
  return (
    <aside className={styles.activity}>
      <h3 className={styles.heading}>Recent Activity</h3>

      <div className={styles.timeline}>
        {activities.map((item, index) => (
          <ActivityItem
            key={item.title}
            {...item}
            isLast={index === activities.length - 1}
          />
        ))}
      </div>
    </aside>
  );
};

export default RecentActivity;