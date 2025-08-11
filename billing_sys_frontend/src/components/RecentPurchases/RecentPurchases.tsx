import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import styles from "./RecentPurchases.module.css";

interface Purchase {
  code: string;
  amount: number;
  status: string;
}

const purchases: Purchase[] = [
  { code: "TX12345", amount: 10, status: "Active" },
  { code: "TX45678", amount: 15, status: "Pending" },
  { code: "TX67890", amount: 20, status: "Expired" },
];

const RecentPurchases: React.FC = () => {
  return (
    <section className={styles.purchases}>
      <h2>Recent Purchases</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.code}>
              <td className={styles.code}>{purchase.code}</td>
              <td>KES {purchase.amount}</td>
              <td
                className={`${styles.status} ${
                  purchase.status === "Active"
                    ? styles.statusActive
                    : purchase.status === "Pending"
                    ? styles.statusPending
                    : styles.statusExpired
                }`}
              >
                {purchase.status === "Active" ? (
                  <>
                    <FaCheckCircle className={styles.iconActive} />{" "}
                    {purchase.status}
                  </>
                ) : purchase.status === "Pending" ? (
                  <>
                    <FaClock className={styles.iconPending} /> {purchase.status}
                  </>
                ) : (
                  <>
                    <FaTimesCircle className={styles.iconExpired} />{" "}
                    {purchase.status}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentPurchases;
