import styles from "./SearchField.module.scss";

import Card from "./MovieCard.js";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const SearchField = () => {
  const context = useContext(MovieContext);

  async function search(query) {
    try {
      let response = await fetch(
        `/api/moivies/search/${query.replace(" ", "_")}`
      );

      let data = response.json().data;

      if (data) {
        context.setMovieCards(
          data.map((movie) => (
            <MovieCard
              id={movie.id}
              year={movie.year}
              rating={movie.rating_kp || movie.rating_imdb}
              name={movie.name_russian || movie.name_original}
              poster={movie.small_poster}
            />
          ))
        );
      } else {
      }
    } catch (error) {}
  }

  return (
    <input
      placeholder="Поиск..."
      className={styles.search}
      onChange={(event) => {
        context.setSearchPhrase(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          search(event.target.value);
        }
      }}
    />
  );
};

export default SearchField;
