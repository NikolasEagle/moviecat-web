import React, { useContext } from "react";

import styles from "./Poster.module.scss";

import MovieContext, { contextType } from "../../contexts/MovieContext.tsx";

const Poster = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div className={styles.poster}>
      <img
        src={
          context.movieData.big_poster ||
          context.movieData.small_poster ||
          "/default.png"
        }
      />
    </div>
  );
};

export default Poster;
