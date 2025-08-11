import React from "react";
import { FaWifi } from "react-icons/fa"; // WiFi/Hotspot icon
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.titlePart1}>BAYZI</span>
        <span className={styles.titlePart2}>NET</span> &nbsp;
        <FaWifi className={styles.icon} />
      </div>
      <div className={styles.contact}>
        Need Assistance? Call{" "}
        <a href="tel:0705011396" className={styles.callLink}>
          0705011396
        </a>
      </div>
    </header>
  );
};

export default Header;
