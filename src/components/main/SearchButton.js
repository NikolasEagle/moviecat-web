import styles from "./SearchButton.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const SearchButton = () => {
  const context = useContext(MovieContext);

  return (
    <button
      className={styles.search_button}
      onClick={() => context.generatePage(1, context.searchPhrase)}
    ></button>
  );
};

export default SearchButton;
