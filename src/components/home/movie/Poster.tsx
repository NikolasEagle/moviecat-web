import React, { useContext } from "react";

import styles from "./Poster.module.scss";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Poster = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div id="poster" className={styles.poster}>
      <img
        src={
          context.movieData.poster_path
            ? `/images${context.movieData.poster_path}`
            : "/no_image.png"
        }
      />
    </div>
  );
};

export default Poster;
