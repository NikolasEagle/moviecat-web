import React, { useContext } from "react";

import styles from "./SearchButton.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";
import { useNavigate } from "react-router";

const SearchButton = () => {
  const context = useContext(MainContext) as contextType;

  const navigate = useNavigate();

  return (
    <button
      className={styles.search_button}
      onClick={() => {
        if (context.searchValue) {
          navigate(`/search/${context.searchValue}`);
        } else {
          navigate(`/`);
        }
        context.setSearchValue("");
      }}
    ></button>
  );
};

export default SearchButton;
