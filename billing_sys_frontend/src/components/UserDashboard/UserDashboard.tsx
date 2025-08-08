import React from "react";
import styles from "./UserDashboard.module.css";

const UserDashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>Welcome Back!</h2>
      <div className={styles.info}>
        <p>Username: Guest</p>
        <p>Remaining Time: 2 Hours</p>
        <p>Data Used: 500 MB</p>
      </div>
      <button className={styles.button}>Extend Session</button>
      <button className={styles.button}>Logout</button>
    </div>
  );
};

export default UserDashboard;
