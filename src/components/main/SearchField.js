import styles from "./SearchField.module.scss";

const SearchField = ({ search, setSearchPhrase }) => (
  <input
    placeholder="Поиск..."
    className={styles.search}
    onChange={(event) => {
      setSearchPhrase(event.target.value);
    }}
    onKeyDown={(event) => {
      if (event.key === "Enter") {
        search(event.target.value);
      }
    }}
  />
);

export default SearchField;
