import React, { useContext } from "react";

import styles from "./SearchField.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const context = useContext(MainContext) as contextType;

  const navigate = useNavigate();

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      value={context.searchValue}
      onChange={(event) => context.setSearchValue(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          if (context.searchValue) {
            navigate(`/search/${context.searchValue}`, {
              replace: false,
            });
          } else {
            navigate(`/`, { replace: false });
          }
          context.setSearchValue("");
          window.location.reload();
        }
      }}
    />
  );
};

export default SearchField;
