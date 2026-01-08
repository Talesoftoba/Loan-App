import styles from "./Summary.module.css";

const MiniLineChart = ({ trend }) => {
  const color =
    trend > 0 ? styles.linePositive :
    trend < 0 ? styles.lineNegative :
    styles.lineNeutral;

  return (
    <svg className={`${styles.lineChart} ${color}`} viewBox="0 0 100 40">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        points="0,30 15,20 30,25 45,15 60,18 75,10 100,20"
      />
    </svg>
  );
};

export default MiniLineChart;