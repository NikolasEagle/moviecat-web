import React from "react";
import styles from "./Header.module.scss";

const Header = ({ size }) => (
  <div className={[styles["header"], styles[size]].join(" ")}>
    <h1>Moviecat</h1>
    <div className={styles.logo}></div>
  </div>
);

export default Header;
