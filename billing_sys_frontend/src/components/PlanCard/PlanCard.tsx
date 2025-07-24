import React from "react";
import styles from "./PlanCard.module.css";

interface PlanCardProps {
  title: string;
  price: string;
  device: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, price, device }) => {
  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <h5>{title}</h5>
        <p>{device}</p>
      </div>
      <div className={styles.pricing}>
        <div className={styles.price}>{price}</div>
        <button className={styles.buyBtn}>Buy</button>
      </div>
    </div>
  );
};

export default PlanCard;
