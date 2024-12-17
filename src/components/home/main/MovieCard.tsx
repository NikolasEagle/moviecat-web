import React from "react";

import styles from "./MovieCard.module.scss";

import { useNavigate } from "react-router";

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

  return (
    <div
      tabIndex={0}
      className={styles.card}
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
