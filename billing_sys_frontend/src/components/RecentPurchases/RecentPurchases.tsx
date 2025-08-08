import React from "react";
import styles from "./RecentPurchases.module.css";

interface Purchase {
  code: string;
  amount: number;
  status: string;
}

const purchases: Purchase[] = [
  { code: "TX12345", amount: 10, status: "Active" },
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
              <td>{purchase.code}</td>
              <td>KES {purchase.amount}</td>
              <td>{purchase.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentPurchases;
