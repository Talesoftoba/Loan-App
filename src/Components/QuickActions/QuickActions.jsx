import styles from "./QuickActions.module.css";

import applyLoan from "../../assets/apply-loan.png";
import checkStatus from "../../assets/check-status.png";
import makePayment from "../../assets/make-payment.png";
import viewStatement from "../../assets/view-statement.png";


const actions = [
  {
    title: "Apply for Loan",
    desc: "Start a new loan application",
    image: applyLoan,
  },
  {
    title: "Check Status",
    desc: "Track your application progress",
    image: checkStatus,
  },
  {
    title: "Make Payment",
    desc: "Manage your loan payments",
    image: makePayment,
  },
  {
    title: "View Statements",
    desc: "Access your loan history",
    image: viewStatement,
  },
];

const QuickActions = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Quick Actions</h2>

      <div className={styles.grid}>
        {actions.map(({ title, desc, image }) => (
          <div key={title} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={image} alt={title} />
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;