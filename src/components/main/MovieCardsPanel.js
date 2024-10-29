import styles from "./Panel.module.scss";

import MovieCard from "./MovieCard.js";

import { useContext, useEffect } from "react";

import MovieContext from "../../contexts/MovieContext.js";

import Download from "../additional/Download.js";
import Error from "../additional/Error.js";

function MovieCardsPanel() {
  const context = useContext(MovieContext);

  console.log(context);

  useEffect(() => {
    generatePage(context.page_id);
  }, []);

  async function generatePage(page_id = 1) {
    context.setMovieCards(<Download />);

    try {
      let response = await fetch(`/api/moivies/pages/${page_id}`);

      let data = response.json().data;

      context.setMovieCards(
        data.map((movie) => (
          <MovieCard
            id={movie.id}
            year={movie.year}
            rating={movie.rating_kp || movie.rating_imdb}
            name={movie.name_russian || movie.name_original}
            poster={movie.small_poster || movie.big_poster || "default"}
          />
        ))
      );
    } catch (error) {
      context.setMovieCards(<Error message={error.message} />);
    }
  }

  return <div className={styles.panel}>{context.movieCards}</div>;
}

export default MovieCardsPanel;
