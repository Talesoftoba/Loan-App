import styles from "./Summary.module.css";

const data = [30, 45, 40, 60, 55, 70, 80];

const MiniBarChart = ({ trend }) => {
  const color =
    trend > 0 ? styles.barPositive :
    trend < 0 ? styles.barNegative :
    styles.barNeutral;

  return (
    <div className={styles.barChart}>
      {data.map((value, index) => (
        <div
          key={index}
          className={`${styles.bar} ${color}`}
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
};

export default MiniBarChart;