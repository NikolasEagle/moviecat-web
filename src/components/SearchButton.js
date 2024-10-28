import styles from "./SearchButton.module.scss";

import { useContext } from "react";

import { FilmsContext } from "../App";

function SearchButton() {
  const context = useContext(FilmsContext);
  console.log(context);
  return (
    <button
      className={styles.search_button}
      onClick={() => context.callAPI(1, context.searchPhrase)}
    ></button>
  );
}

export default SearchButton;
