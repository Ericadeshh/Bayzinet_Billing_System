import React from "react";
import styles from "./PlanCard.module.css";

interface PlanCardProps {
  name: string;
  price: number;
  duration: string;
  devices: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  duration,
  devices,
}) => {
  const handleBuy = async () => {
    // Placeholder for Fetch API call to backend
    try {
      const response = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: name, price }),
      });
      if (response.ok) {
        alert("Purchase initiated. Please check M-Pesa.");
      } else {
        alert("Purchase failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.devices}>{devices}</p>

        <p className={styles.price}>KES {price}</p>
      </div>

      <div>
        <button className={styles.button} onClick={handleBuy}>
          Buy
        </button>
        <p className={styles.duration}>{duration}</p>
      </div>
    </div>
  );
};

export default PlanCard;
