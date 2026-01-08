import styles from "./RecentActivity.module.css";

const ActivityItem = ({ title, time, icon: Icon, color, isLast }) => {
  return (
    <div className={styles.item}>
      {/* Timeline */}
      <div className={styles.track}>
        <span className={`${styles.dot} ${styles[color]}`} />
        {!isLast && <span className={styles.line} />}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={`${styles.icon} ${styles[color]}`}>
          <Icon size={16} />
        </div>

        <div>
          <p className={styles.title}>{title}</p>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;