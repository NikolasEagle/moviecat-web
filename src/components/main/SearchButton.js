import styles from "./SearchButton.module.scss";

import { useContext } from "react";

import MainContext from "../../contexts/MainContext.js";

const SearchButton = () => {
  const context = useContext(MainContext);

  return (
    <button
      className={styles.search_button}
      onClick={(event) => {
        if (context.searchValue) {
          context.navigate(`/search/${context.searchValue}/pages/1`);
        } else {
          context.navigate(`/pages/1`);
        }
        context.setSearchValue("");
      }}
    ></button>
  );
};

export default SearchButton;
