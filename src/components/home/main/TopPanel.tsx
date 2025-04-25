import React from "react";

import styles from "./TopPanel.module.scss";

import Header from "../../additional/Header.tsx";
import SearchPanel from "./SearchPanel.tsx";
import AccountButton from "./AccountButton.tsx";
import ResultsInfo from "./ResultsInfo.tsx";

const TopPanel = () => (
  <>
    <div className={styles.top_panel_field}></div>
    <div className={styles.top_panel}>
      <Header size={"small"} />
      <SearchPanel />
      <div className={styles.buttons_panel}>
        <AccountButton />
      </div>
      <ResultsInfo />
    </div>
  </>
);

export default TopPanel;
