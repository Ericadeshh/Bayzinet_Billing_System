import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>BAYZINET</div>
      <div className={styles.contact}>Need Assistance? Contact 0705011396</div>
    </header>
  );
};

export default Header;
