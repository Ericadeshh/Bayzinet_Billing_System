import React from "react";
import { GiCheckMark } from "react-icons/gi";
import styles from "./Instructions.module.css";

const Instructions: React.FC = () => {
  const steps = [
    "Pick the data you wish",
    "Tap Buy",
    "On the Pop-up, enter your MPESA Phone Number and click 'Pay using Mpesa'",
    "Once payment is confirmed, you will be connected automatically, or you can use your M-pesa message or transaction code to connect",
  ];

  return (
    <section className={styles.instructions}>
      <div>How to Purchase</div>
      <ul className={styles.checkList}>
        {steps.map((step, index) => (
          <li key={index}>
            <GiCheckMark className={styles.checkIcon} />
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Instructions;
