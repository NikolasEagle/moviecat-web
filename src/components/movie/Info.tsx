import React, { useContext } from "react";

import styles from "./Info.module.scss";

import Rating from "./Rating.tsx";

import MovieContext, { contextType } from "../../contexts/MovieContext.tsx";

const Info = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div className={styles.movie_info}>
      <h2>
        {context.movieData.name_russian}
        {context.movieData.year && ` (${context.movieData.year})`}
      </h2>
      <p>
        <strong>Страна</strong>: {context.movieData.country_ru}
      </p>
      <p>
        <strong>Режиссер</strong>:{" "}
        {context.movieData.persons
          .filter((person) => person.profession.profession_id === "director")
          .map((person) => person.name_russian)
          .join(", ")}
      </p>
      <p>
        <strong>Продюсер</strong>:{" "}
        {context.movieData.persons
          .filter((person) => person.profession.profession_id === "producer")
          .map((person) => person.name_russian)
          .join(", ")}
      </p>
      <p>
        <strong>Актеры</strong>:{" "}
        {context.movieData.persons
          .filter((person) => person.profession.profession_id === "actor")
          .map((person) => person.name_russian)
          .join(", ")}
      </p>
      {context.movieData.budget ? (
        <p>
          <strong>Бюджет</strong>: {context.movieData.budget}{" "}
        </p>
      ) : null}

      {context.movieData.genres.length ? (
        <p>
          <strong>Жанр</strong>:{" "}
          {context.movieData.genres.map((genre) => genre.name_ru).join(", ")}
        </p>
      ) : null}
      <Rating />
    </div>
  );
};

export default Info;
