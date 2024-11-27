import styles from "./Player.module.scss";

import { Helmet } from "react-helmet";

import React, { useContext } from "react";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Player = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div className={styles.player}>
      <h3>Смотреть онлайн</h3>
      <div
        data-kinopoisk={context.movieData.kinopoisk_id}
        id="kinobd"
        data-player="collaps"
      ></div>
      <Helmet>
        <script src="https://kinobd.xyz/js/player_.js"></script>
      </Helmet>
    </div>
  );
};

export default Player;
