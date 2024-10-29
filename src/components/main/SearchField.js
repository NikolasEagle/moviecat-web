import styles from "./SearchField.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const SearchField = () => {
  const context = useContext(MovieContext);

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      onChange={(event) => {
        context.setSearchPhrase(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          context.generatePage(1, event.target.value);
        }
      }}
    />
  );
};

export default SearchField;
