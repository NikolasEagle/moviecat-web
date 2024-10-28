import { useContext } from "react";
import styles from "./SearchField.module.scss";

import { FilmsContext } from "../App";

function SearchField() {
  const context = useContext(FilmsContext);

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      onChange={(event) => {
        context.setSearchPhrase(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          context.callAPI(1, context.searchPhrase);
        }
      }}
    />
  );
}

export default SearchField;
