import React, { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import styles from "./PlanCard.module.css";

interface PlanCardProps {
  id: number;
  name: string;
  price: number;
  duration: string;
  devices: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  id,
  name,
  price,
  duration,
  devices,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const normalizePhoneNumber = (phone: string): string => {
    // Convert 0741091661 to 254741091661
    if (phone.startsWith("0")) {
      return "254" + phone.slice(1);
    }
    return phone;
  };

  const handleBuy = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsSuccess(false);
        setMessage("Please log in to purchase.");
        setIsLoading(false);
        return;
      }

      const rawPhone = prompt(
        "Enter your M-Pesa phone number (e.g., 0741091661 or 254741091661):"
      );
      if (!rawPhone) {
        setIsSuccess(false);
        setMessage("Phone number required.");
        setIsLoading(false);
        return;
      }

      const phone = normalizePhoneNumber(rawPhone);
      if (!/^2547\d{8}$/.test(phone)) {
        setIsSuccess(false);
        setMessage(
          "Invalid phone number. Use format 0741091661 or 254741091661."
        );
        setIsLoading(false);
        return;
      }

      console.log("🔍 Sending purchase request:", { planId: id, phone });

      const response = await axios.post(
        "http://localhost:5000/api/purchase",
        {
          planId: id,
          phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("🔍 Purchase response:", response.data);

      if (response.status === 200) {
        setIsSuccess(true);
        setMessage(response.data.data.message);
      } else {
        setIsSuccess(false);
        setMessage(response.data.message || "Purchase failed.");
      }
    } catch (error) {
      let errorMessage = "Error connecting to server.";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setIsSuccess(false);
      setMessage(errorMessage);
      console.error("❌ Purchase error:", errorMessage);
    } finally {
      setIsLoading(false);
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
        <button
          className={`${styles.button} ${isLoading ? styles.loading : ""}`}
          onClick={handleBuy}
          disabled={isLoading}
        >
          {isLoading ? <FaSpinner className={styles.spinner} /> : "Buy"}
        </button>
        <p className={styles.duration}>{duration}</p>
        {message && (
          <p
            className={`${styles.message} ${
              isSuccess ? styles.success : styles.error
            }`}
          >
            {isSuccess && <FaCheckCircle className={styles.icon} />}
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
