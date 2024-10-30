import styles from "./SearchButton.module.scss";

import { useContext } from "react";

import MainContext from "../../contexts/MainContext.js";

import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const context = useContext(MainContext);

  const navigate = useNavigate();

  return (
    <button
      className={styles.search_button}
      onClick={() => {
        context.setQueryPhrase(context.searchValue);
        if (context.searchValue) {
          navigate(`/search/${context.searchValue}/pages/1`);
        } else {
          navigate(`/pages/1`);
        }
        context.setSearchValue("");
        context.setPage(1);
      }}
    ></button>
  );
};

export default SearchButton;
