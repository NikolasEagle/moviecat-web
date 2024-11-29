import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <h1>Moviecat</h1>
    <div className={styles.logo}></div>
  </div>
);

export default Header;
