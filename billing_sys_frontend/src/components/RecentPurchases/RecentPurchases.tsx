import React from "react";
import styles from "./RecentPurchases.module.css";

const RecentPurchases: React.FC = () => {
  return (
    <div className={styles.recentBox}>
      <h4>Recent Purchases</h4>
      <table className="table table-sm table-bordered mt-3">
        <thead>
          <tr>
            <th>Code</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BAZ1234</td>
            <td>KES 20</td>
            <td>Connected</td>
          </tr>
          <tr>
            <td>BAZ5678</td>
            <td>KES 40</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentPurchases;
