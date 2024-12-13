import React, { useContext } from "react";

import styles from "./Info.module.scss";

import Rating from "./Rating.tsx";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Info = () => {
  const context = useContext(MovieContext) as contextType;

  return (
    <div className={styles.movie_info}>
      <h2>
        {context.movieData.name_russian || context.movieData.name_original}
        {context.movieData.year && context.movieData.year !== "0-0"
          ? ` (${context.movieData.year})`
          : null}
      </h2>

      {context.movieData.country_ru && (
        <p>
          <strong>Страна</strong>: {context.movieData.country_ru}
        </p>
      )}

      <div>
        {context.movieData.persons.filter(
          (person) => person.profession.profession_id === "director"
        ).length ? (
          <p>
            <strong>Режиссер</strong>:{" "}
            {context.movieData.persons
              .filter(
                (person) => person.profession.profession_id === "director"
              )
              .map((person) => person.name_russian || person.name_english)
              .join(", ")}
          </p>
        ) : null}
        {context.movieData.persons.filter(
          (person) => person.profession.profession_id === "producer"
        ).length ? (
          <p>
            <strong>Продюсер</strong>:{" "}
            {context.movieData.persons
              .filter(
                (person) => person.profession.profession_id === "producer"
              )
              .map((person) => person.name_russian || person.name_english)
              .join(", ")}
          </p>
        ) : null}{" "}
        {context.movieData.persons.filter(
          (person) => person.profession.profession_id === "actor"
        ).length ? (
          <p>
            <strong>Актеры</strong>:{" "}
            {context.movieData.persons
              .filter((person) => person.profession.profession_id === "actor")
              .map((person) => person.name_russian || person.name_english)
              .join(", ")}
          </p>
        ) : null}
      </div>

      {context.movieData.budget && (
        <p>
          <strong>Бюджет</strong>: {context.movieData.budget}
        </p>
      )}

      {context.movieData.genres.length && (
        <p>
          <strong>Жанр: </strong>
          {context.movieData.genres.map((genre) => genre.name_ru).join(", ")}
        </p>
      )}

      <Rating />
    </div>
  );
};

export default Info;
