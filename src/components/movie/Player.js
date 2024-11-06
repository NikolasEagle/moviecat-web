import styles from "./Player.module.scss";

import { Helmet } from "react-helmet";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Player = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.player}>
      <h3>Смотреть онлайн</h3>

      <div
        data-player="alloha"
        data-kinopoisk={context.kinopoisk_id}
        id="kinobd"
      ></div>
      <Helmet>
        <script src="https://kinobd.xyz/js/player_.js"></script>
      </Helmet>
    </div>
  );
};

export default Player;
