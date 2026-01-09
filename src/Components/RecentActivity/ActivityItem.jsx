import styles from "./RecentActivity.module.css";

const ActivityItem = ({ title, time, icon: Icon, color, isLast }) => {
  return (
    <div className={styles.item}>
      {/* Timeline column */}
      <div className={styles.timelineCol}>
        <span className={styles.line} />
        <div className={`${styles.icon} ${styles[color]}`}>
          <Icon size={16} />
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default ActivityItem;