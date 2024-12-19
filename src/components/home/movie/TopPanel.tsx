import React from "react";

import styles from "./TopPanel.module.scss";

import BackButton from "./BackButton.tsx";
import Poster from "./Poster.tsx";
import Info from "./Info.tsx";

const TopPanel = () => (
  <div className={styles.top_panel}>
    <div className={styles.info}>
      <Poster />
      <Info />
    </div>
  </div>
);

export default TopPanel;
