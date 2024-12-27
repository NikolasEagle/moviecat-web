import React, { useContext } from "react";

import styles from "./SearchField.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import AuthContext, {
  contextTypeAuth,
} from "../../../contexts/AuthContext.tsx";

import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const context = useContext(MainContext) as contextType;

  const contextAuth = useContext(AuthContext) as contextTypeAuth;

  const navigate = useNavigate();

  return (
    <input
      id="search"
      placeholder="Поиск..."
      tabIndex={1}
      className={styles.search}
      value={context.searchValue}
      onChange={(event) => context.setSearchValue(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          contextAuth.checkAuth();
          if (context.searchValue) {
            navigate(`/search/${context.searchValue}`);
          } else {
            navigate(`/`);
          }
          context.setSearchValue("");
        }
      }}
    />
  );
};

export default SearchField;
