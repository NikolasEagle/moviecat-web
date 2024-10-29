import styles from "./SearchButton.module.scss";

import { useContext } from "react";

import MainContext from "../../contexts/MainContext.js";

const SearchButton = () => {
  const context = useContext(MainContext);

  return (
    <button
      className={styles.search_button}
      onClick={() => {
        context.generatePage(1, context.searchPhrase);
      }}
    ></button>
  );
};

export default SearchButton;
