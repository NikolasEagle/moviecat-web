import React, { useContext } from "react";

import styles from "./Rating.module.scss";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Rating = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div className={styles.rating}>
      {/*context.movieData.age_restriction && (
        <div className={styles.age}>
          <p>
            <strong>{context.movieData.age_restriction}+</strong>
          </p>
        </div>
      )*/}
      {context.movieData.vote_average && (
        <div className={styles.imdb}>
          <div></div>
          <p>
            <strong>{context.movieData.vote_average.toFixed(1)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Rating;
