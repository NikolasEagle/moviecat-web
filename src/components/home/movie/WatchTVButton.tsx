import React, { useContext } from "react";

import styles from "./WatchTVButton.module.scss";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";
import { useNavigate } from "react-router";

const WatchTVButton = () => {
  const navigate = useNavigate();

  const context = useContext(MovieContext) as contextType;

  return (
    <button
      autoFocus
      onClick={() => {
        {
          navigate(`/player/${context.movieData.kinopoisk_id}`);
        }
      }}
      className={styles.watch_button_tv}
    >
      Смотреть
    </button>
  );
};

export default WatchTVButton;
