import { useContext } from "react";
import styles from "./SearchField.module.scss";

import { FilmsContext } from "../App";

function SearchField() {
  const context = useContext(FilmsContext);

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      value={context.searchPhrase}
      onChange={(event) => {
        context.setSearchPhrase(event.target.value);
      }}
    />
  );
}

export default SearchField;
