import React from "react";
import { PiTrademarkFill } from "react-icons/pi";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Powered by Bayzinet
        <PiTrademarkFill className={styles.tm} />
        <br />
        &copy; 2025
      </p>
      <p>
        Contact:{" "}
        <a href="mailto:itjedi37@gmail.com" className={styles.email}>
          itjedi37@gmail.com
        </a>{" "}
        | Terms of Service
      </p>
    </footer>
  );
};

export default Footer;
