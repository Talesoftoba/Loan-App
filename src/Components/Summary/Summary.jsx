import SummaryCard from "./SummaryCard";
import MiniBarChart from "./MiniBarChart";
import MiniLineChart from "./MiniLineChart";
import styles from "./Summary.module.css";

const Summary = () => {
  return (
    
    <section className={styles.summary}>

      
      <SummaryCard
        title="Loan Applications"
        value={12}
        change={10}
        period="Last 30 Days"
      >
        <MiniBarChart trend={10} />
      </SummaryCard>

      <SummaryCard
        title="Payment History"
        value={5}
        change={-5}
        period="Last 6 Months"
      >
        <MiniLineChart trend={-5} />
      </SummaryCard>
    </section>
  );
};

export default Summary;