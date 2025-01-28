import React, { useContext } from "react";

import styles from "./Poster.module.scss";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Poster = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div id="poster" className={styles.poster}>
      <img
        src={
          context.movieData.big_poster ||
          context.movieData.small_poster ||
          (context.movieData.images.length !== 0 &&
            context.movieData.images[0].src) ||
          "/no_image.png"
        }
      />
    </div>
  );
};

export default Poster;
