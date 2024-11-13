import React, { useContext } from "react";

import styles from "./MovieCard.module.scss";

import MainContext, { contextType } from "../../contexts/MainContext.js";

const MovieCard = ({ id, year, rating, name, poster }) => {
  const context = useContext(MainContext) as contextType;

  return (
    <div
      tabIndex={0}
      className={styles.card}
      onClick={() => context.navigate(`/movies/${id}`)}
    >
      <div className={styles.top_panel}>
        {year && <div className={styles.year}>{year}</div>}
        {rating && <div className={styles.rating}>{rating}</div>}
      </div>

      <img src={poster} />

      <div className={styles.gradient}></div>

      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default MovieCard;
