import styles from "./SearchPanel.module.scss";

import SearchField from "./SearchField.js";
import SearchButton from "./SearchButton.js";

const SearchPanel = () => (
  <div className={styles.search_panel}>
    <SearchField />
    <SearchButton />
  </div>
);

export default SearchPanel;
