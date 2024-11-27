import React from "react";

import styles from "./SearchPanel.module.scss";

import Header from "../../additional/Header.tsx";
import SearchField from "./SearchField.tsx";
import SearchButton from "./SearchButton.tsx";

const SearchPanel = () => (
  <div className={styles.search_panel}>
    <Header />
    <SearchField />
    <SearchButton />
  </div>
);

export default SearchPanel;
