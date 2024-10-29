import styles from "./SearchButton.module.scss";

const SearchButton = ({ search, searchPhrase }) => (
  <button
    className={styles.search_button}
    onClick={() => search(searchPhrase)}
  ></button>
);

export default SearchButton;
