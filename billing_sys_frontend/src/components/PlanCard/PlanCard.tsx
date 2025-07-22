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
      <h5>{title}</h5>
      <p>{device}</p>
      <div className={styles.price}>{price}</div>
      <button className="btn btn-primary btn-sm mt-2">Buy</button>
    </div>
  );
};

export default PlanCard;
