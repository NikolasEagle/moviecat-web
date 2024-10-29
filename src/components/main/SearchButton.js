import styles from "./SearchButton.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

function SearchButton() {
  let context = useContext(FilmsContext);

  return (
    <button
      className={styles.search_button}
      onClick={() => console.log()}
    ></button>
  );
}

export default SearchButton;
