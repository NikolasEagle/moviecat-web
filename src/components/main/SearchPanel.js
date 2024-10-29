import styles from "./SearchPanel.module.scss";

import MovieCard from "./MovieCard.js";
import SearchField from "./SearchField.js";
import SearchButton from "./SearchButton.js";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

import Download from "../additional/Download.js";
import NotFound from "../additional/NotFound.js";
import Error from "../additional/Error.js";

const SearchPanel = () => {
  const context = useContext(MovieContext);

  async function search(query) {
    context.setMovieCards(<Download />);

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
              poster={movie.small_poster || movie.big_poster || "default"}
            />
          ))
        );
      } else {
        context.setMovieCards(<NotFound query={query} />);
      }
    } catch (error) {
      context.setMovieCards(<Error message={error.message} />);
    }
  }

  return (
    <div className={styles.search_panel}>
      <SearchField search={search} setSearchPhrase={context.setSearchPhrase} />
      <SearchButton search={search} searchPhrase={context.searchPhrase} />
    </div>
  );
};

export default SearchPanel;
