import React from "react";

import styles from "./TopPanel.module.scss";

import Header from "../../additional/Header.tsx";
import SearchPanel from "./SearchPanel.tsx";
import LogOutButton from "./LogOutButton.tsx";
import AccountButton from "./AccountButton.tsx";

const TopPanel = () => (
  <div className={styles.top_panel}>
    <Header />
    <SearchPanel />
    <div className={styles.buttons_panel}>
      <AccountButton />
      <LogOutButton />
    </div>
  </div>
);

export default TopPanel;
