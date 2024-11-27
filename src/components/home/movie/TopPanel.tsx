import React from "react";

import styles from "./TopPanel.module.scss";

import Poster from "./Poster.tsx";
import Info from "./Info.tsx";

const TopPanel = () => (
  <div className={styles.top_panel}>
    <Poster />
    <Info />
  </div>
);

export default TopPanel;
