import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Powered by Bayzinet &copy; 2025</p>
      <p>Contact: support@bayzinet.com | Terms of Service</p>
    </footer>
  );
};

export default Footer;
