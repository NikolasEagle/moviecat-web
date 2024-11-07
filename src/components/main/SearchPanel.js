import styles from "./SearchPanel.module.scss";

import Header from "../additional/Header.js";
import SearchField from "./SearchField.js";
import SearchButton from "./SearchButton.js";

const SearchPanel = () => (
  <>
    <div className={styles.search_panel}>
      <Header />
      <SearchField />
      <SearchButton />
    </div>
  </>
);

export default SearchPanel;
