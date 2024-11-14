import React, { useContext } from "react";

import styles from "./Rating.module.scss";

import MovieContext, { contextType } from "../../contexts/MovieContext.tsx";

const Rating = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div className={styles.rating}>
      {context.movieData.age_restriction && (
        <div className={styles.age}>
          <p>
            <strong>{context.movieData.age_restriction}+</strong>
          </p>
        </div>
      )}
      {context.movieData.rating_kp && (
        <div className={styles.kp}>
          <div></div>
          <p>
            <strong>{context.movieData.rating_kp}</strong>
          </p>
        </div>
      )}
      {context.movieData.rating_imdb && (
        <div className={styles.imdb}>
          <div></div>
          <p>
            <strong>{context.movieData.rating_imdb}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Rating;
