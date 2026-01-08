import styles from "./Summary.module.css";

const SummaryCard = ({ title, value, change, period, children }) => {
  const trend =
    change > 0 ? "positive" : change < 0 ? "negative" : "neutral";

  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.value}>{value}</div>

      <p className={`${styles.meta} ${styles[trend]}`}>
        {change > 0 && "+"}
        {change}% {period}
      </p>

      <div className={styles.chart}>{children}</div>
    </div>
  );
};

export default SummaryCard;