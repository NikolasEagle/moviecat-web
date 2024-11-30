import React, { useContext } from "react";

import styles from "./SearchButton.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

const SearchButton = () => {
  const context = useContext(MainContext) as contextType;

  return (
    <button
      className={styles.search_button}
      onClick={() => {
        if (context.searchValue) {
          context.navigate(`/search/${context.searchValue}`);
        } else {
          context.navigate(`/`);
        }
        context.setSearchValue("");
        window.location.reload();
      }}
    ></button>
  );
};

export default SearchButton;
