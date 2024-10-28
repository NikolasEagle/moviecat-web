import styles from "./SearchPanel.module.scss";

import SearchField from "./SearchField";

import SearchButton from "./SearchButton";

function SearchPanel() {
  return (
    <div className={styles.search_panel}>
      <SearchField />
      <SearchButton />
    </div>
  );
}

export default SearchPanel;
