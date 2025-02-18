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

    title: string | null;

    release_date: string | null;

    vote_average: number | null;

    poster_path: string | null;
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
        {movie.release_date && (
          <div
            className={
              !contextDevice.tv
                ? styles.year
                : [styles["year"], styles["year_tv"]].join(" ")
            }
          >
            {movie.release_date.split("-")[0]}
          </div>
        )}
        {movie.vote_average && (
          <div
            className={
              !contextDevice.tv
                ? styles.rating
                : [styles["rating"], styles["rating_tv"]].join(" ")
            }
          >
            {movie.vote_average.toFixed(1)}
          </div>
        )}
      </div>

      <img
        src={
          movie.poster_path ? `/images${movie.poster_path}` : "/no_image.png"
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
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
