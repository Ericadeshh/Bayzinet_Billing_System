import React from "react";
import styles from "./QuickAccess.module.css";
import { FaPhoneAlt, FaInfoCircle, FaWifi } from "react-icons/fa";

const QuickAccess: React.FC = () => {
  return (
    <div className={styles.quickAccess}>
      <div className={styles.item}>
        <FaPhoneAlt /> Need Assistance? Call 0705011396
      </div>
      <div className={styles.item}>
        <FaWifi /> Already Purchased? Use Code
      </div>
      <div className={styles.item}>
        <FaInfoCircle /> How to Purchase
      </div>
    </div>
  );
};

export default QuickAccess;
