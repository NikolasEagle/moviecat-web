import styles from "./SearchField.module.scss";

import { useContext } from "react";

import MainContext from "../../contexts/MainContext.js";

const SearchField = () => {
  const context = useContext(MainContext);

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      value={context.searchPhrase}
      onChange={(event) => {
        context.setSearchPhrase(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          context.generatePage(1, context.searchPhrase);
        }
      }}
    />
  );
};

export default SearchField;
