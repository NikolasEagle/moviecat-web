import React, { useContext } from "react";

import styles from "./Info.module.scss";

import Rating from "./Rating.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";
import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";
import WatchTVButton from "./WatchTVButton.tsx";

const Info = () => {
  const context = useContext(MovieContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  console.log(context.movieData.budget);

  return (
    <div className={styles.movie_info}>
      <h2>{context.movieData.title || context.movieData.name} </h2>
      <h3>
        {context.movieData.release_date?.split("-").reverse().join(".") ||
          context.movieData.first_air_date?.split("-").reverse().join(".")}
      </h3>

      {context.movieData.production_countries.length > 0 ? (
        <p>
          <strong>Страна</strong>:{" "}
          {context.movieData.production_countries
            .map((country) => country["name"])
            .join(", ")}
        </p>
      ) : null}

      {/*<div>
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
            </div>*/}

      {context.movieData.budget ? (
        <p>
          <strong>Бюджет</strong>: {context.movieData.budget}
        </p>
      ) : null}

      {context.movieData.genres.length && (
        <p>
          <strong>Жанр: </strong>
          {context.movieData.genres.map((genre) => genre["name"]).join(", ")}
        </p>
      )}

      <Rating />
      {contextDevice.tv && <WatchTVButton />}
    </div>
  );
};

export default Info;
