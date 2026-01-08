import styles from "./QuickActions.module.css";

const actions = [
  { title: "Apply for Loan", desc: "Start a new loan application" },
  { title: "Check Status", desc: "Track your application progress" },
  { title: "Make Payment", desc: "Manage your loan payments" },
  { title: "View Statements", desc: "Access your loan history" },
];

const QuickActions = () => {
  return (
    <section>
      <h2 className={styles.title}>Quick Actions</h2>

      <div className={styles.grid}>
        {actions.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;