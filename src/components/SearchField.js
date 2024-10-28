import { useState } from "react";
import styles from "./SearchField.module.scss";

function SearchField() {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      value={searchPhrase}
      onChange={(event) => setSearchPhrase(event.target.value)}
    />
  );
}

export default SearchField;
