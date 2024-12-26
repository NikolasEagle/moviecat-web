import React, { useContext } from "react";

import styles from "./SearchButton.module.scss";

import AuthContext, {
  contextTypeAuth,
} from "../../../contexts/AuthContext.tsx";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";
import { useNavigate } from "react-router";

const SearchButton = () => {
  const context = useContext(MainContext) as contextType;

  const contextAuth = useContext(AuthContext) as contextTypeAuth;

  const navigate = useNavigate();

  return (
    <button
      tabIndex={1}
      className={styles.search_button}
      onClick={() => {
        contextAuth.checkAuth();
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
