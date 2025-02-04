import React, { useContext, useEffect, useRef } from "react";

import styles from "./MovieCard.module.scss";

import { useNavigate } from "react-router";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

type Props = {
  index: number;
  movie: {
    id: number;

    year: string | null;

    year_start: string | null;

    year_end: string | null;

    rating_kp: string | null;

    rating_imdb: string | null;

    small_poster: string | null;

    big_poster: string | null;

    name_original: string | null;

    name_russian: string | null;

    images: Array<{ src: string }>;
  };
};

const MovieCard = ({ index, movie }: Props) => {
  const navigate = useNavigate();

  const movieCardRef = useRef<any>(null);

  const contextDevice = useContext(DeviceContext) as contextDevice;

  useEffect(() => {
    if (index === 0) {
      movieCardRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={movieCardRef}
      tabIndex={2}
      className={
        !contextDevice.tv
          ? styles.card
          : [styles["card"], styles["card_tv"]].join(" ")
      }
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className={styles.top_panel}>
        {(movie.year || movie.year_start) && (
          <div
            className={
              !contextDevice.tv
                ? styles.year
                : [styles["year"], styles["year_tv"]].join(" ")
            }
          >
            {movie.year || movie.year_start
              ? movie.year || `${movie.year_start}-${movie.year_end}`
              : null}
          </div>
        )}
        {(movie.rating_kp || movie.rating_imdb) && (
          <div
            className={
              !contextDevice.tv
                ? styles.rating
                : [styles["rating"], styles["rating_tv"]].join(" ")
            }
          >
            {movie.rating_kp || movie.rating_imdb}
          </div>
        )}
      </div>

      <img
        src={
          movie.small_poster ||
          movie.big_poster ||
          ("images" in movie && movie.images.length > 0
            ? movie.images[0].src
            : "/no_image.png")
        }
      />

      <div className={styles.gradient}></div>

      <div
        className={
          !contextDevice.tv
            ? styles.name
            : [styles["name"], styles["name_tv"]].join(" ")
        }
      >
        {movie.name_russian || movie.name_original}
      </div>
    </div>
  );
};

export default MovieCard;
