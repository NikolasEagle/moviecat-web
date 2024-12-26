import React, { useContext } from "react";

import styles from "./MovieCard.module.scss";

import { useNavigate } from "react-router";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

type Props = {
  movie: {
    id: number;

    year: string | null;

    rating_kp: string | null;

    rating_imdb: string | null;

    small_poster: string | null;

    big_poster: string | null;

    name_original: string | null;

    name_russian: string | null;
  };
};

const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return (
    <div
      tabIndex={2}
      className={
        !contextDevice
          ? styles.card
          : [styles["card"], styles["card_tv"]].join(" ")
      }
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className={styles.top_panel}>
        {movie.year && movie.year !== "0-0" ? (
          <div className={styles.year}>{movie.year}</div>
        ) : null}
        {(movie.rating_kp || movie.rating_imdb) && (
          <div className={styles.rating}>
            {movie.rating_kp || movie.rating_imdb}
          </div>
        )}
      </div>

      <img src={movie.small_poster || movie.big_poster || "/no_image.png"} />

      <div className={styles.gradient}></div>

      <div className={styles.name}>
        {movie.name_russian || movie.name_original}
      </div>
    </div>
  );
};

export default MovieCard;
