import styles from "./Info.module.scss";

import Rating from "./Rating.js";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Info = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.movie_info}>
      <h2>{`${context.name_russian} (${context.year})`}</h2>
      <p>
        <strong>Страна</strong>: {context.country_ru}
      </p>
      <p>
        <strong>Режиссер</strong>:{" "}
        {context.persons
          .filter((person) => person.profession.profession_id === "director")
          .map((person) => person.name_russian)
          .join(", ")}
      </p>
      <p>
        <strong>Продюсер</strong>:{" "}
        {context.persons
          .filter((person) => person.profession.profession_id === "producer")
          .map((person) => person.name_russian)
          .join(", ")}
      </p>
      <p>
        <strong>Актеры</strong>:{" "}
        {context.persons
          .filter((person) => person.profession.profession_id === "actor")
          .map((person) => person.name_russian)
          .join(", ")}
      </p>
      {context.budget ? (
        <p>
          <strong>Бюджет</strong>: {context.budget}{" "}
        </p>
      ) : null}

      {context.genres.length ? (
        <p>
          <strong>Жанр</strong>:{" "}
          {context.genres.map((genre) => genre.name_ru).join(", ")}
        </p>
      ) : null}
      <Rating />
    </div>
  );
};

export default Info;
