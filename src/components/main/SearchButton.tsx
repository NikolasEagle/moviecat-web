import React, { useContext } from "react";

import styles from "./SearchButton.module.scss";

import MainContext, { contextType } from "../../contexts/MainContext.tsx";

const SearchButton = () => {
  const context = useContext(MainContext) as contextType;

  return (
    <button
      className={styles.search_button}
      onClick={() => {
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
