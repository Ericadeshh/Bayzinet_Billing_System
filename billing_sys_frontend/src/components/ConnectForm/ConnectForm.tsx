import React, { useState } from "react";
import styles from "./ConnectForm.module.css";

const ConnectForm: React.FC = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [transactionCode, setTransactionCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleVoucherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Fetch API call
    try {
      const response = await fetch("/api/voucher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ voucherCode }),
      });
      if (response.ok) {
        alert("Voucher validated");
      } else {
        alert("Invalid voucher");
      }
    } catch {
      alert("Error connecting to server");
    }
  };

  const handleTransactionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Fetch API call
    try {
      const response = await fetch("/api/transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionCode }),
      });
      if (response.ok) {
        alert("Transaction validated");
      } else {
        alert("Invalid transaction code");
      }
    } catch {
      alert("Error connecting to server");
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Fetch API call
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        alert("Login successful");
      } else {
        alert("Login failed");
      }
    } catch {
      alert("Error connecting to server");
    }
  };

  const handleMpesaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Fetch API call
    try {
      const response = await fetch("/api/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
      if (response.ok) {
        alert("M-Pesa payment initiated");
      } else {
        alert("Payment failed");
      }
    } catch {
      alert("Error connecting to server");
    }
  };

  return (
    <section className={styles.formSection}>
      <h2>Already Purchased?</h2>
      <div className={styles.forms}>
        <form onSubmit={handleMpesaSubmit} className={styles.form}>
          <h3>Pay using M-Pesa</h3>
          <input
            type="text"
            placeholder="M-Pesa Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Pay
          </button>
        </form>
        <form onSubmit={handleVoucherSubmit} className={styles.form}>
          <h3>Have Voucher Code?</h3>
          <input
            type="text"
            placeholder="Voucher Code"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Connect
          </button>
        </form>
        <form onSubmit={handleTransactionSubmit} className={styles.form}>
          <h3>Use Transaction Code</h3>
          <input
            type="text"
            placeholder="Transaction Code"
            value={transactionCode}
            onChange={(e) => setTransactionCode(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Connect
          </button>
        </form>
        <form onSubmit={handleLoginSubmit} className={styles.form}>
          <h3>Use Username and Password</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectForm;
