import styles from "./Main.module.scss";

import Header from "../components/main/Header.js";
import SearchPanel from "../components/main/SearchPanel.js";
import ResultsInfo from "../components/main/ResultsInfo.js";
import PageNumber from "../components/main/PageNumber.js";
import MovieCardsPanel from "../components/main/MovieCardsPanel.js";
import MovieCard from "../components/main/MovieCard.js";
import PageButtonsPanel from "../components/main/PageButtonsPanel.js";

import { useState } from "react";

import MovieContext from "../contexts/MainContext.js";

import { useParams } from "react-router-dom";

import Download from "../components/additional/Download.js";
import NotFound from "../components/additional/NotFound.js";
import Error from "../components/additional/Error.js";

const Main = () => {
  let { page_id, query } = useParams();

  let [searchValue, setSearchValue] = useState("");

  let [queryPhrase, setQueryPhrase] = useState("");

  let [page, setPage] = useState(1);

  let [movieCards, setMovieCards] = useState([]);

  async function generatePage() {
    setMovieCards(<Download />);

    let url;

    setQueryPhrase(query);

    setPage(+page_id);

    if (query) {
      let queryLowerCase = query.replace(/ /g, "_");
      url = `/api/movies/search/${queryLowerCase}/pages/${page_id}`;
    } else {
      url = `/api/movies/pages/${page_id}`;
    }

    try {
      let response = await fetch(url);

      let body = await response.json();

      let data = body.data;

      if (data.length) {
        setMovieCards([
          <ResultsInfo query={query ? query.replace(/_/g, " ") : null} />,
          <PageNumber currentPage={body.current_page} />,
          ...data.map((movie) => (
            <MovieCard
              id={movie.id}
              year={movie.year}
              rating={movie.rating_kp || movie.rating_imdb}
              name={movie.name_russian || movie.name_original}
              poster={movie.small_poster || movie.big_poster || "/default.png"}
            />
          )),
          <PageButtonsPanel
            first_page={body.first_page_url}
            prev_page={body.prev_page_url}
            next_page={body.next_page_url}
          />,
        ]);
      } else {
        setMovieCards(<NotFound query={query} />);
      }
    } catch (error) {
      console.log(error.message);
      setMovieCards(<Error message={error.message} />);
    }
  }

  return (
    <div className={styles.main}>
      <Header />
      <MovieContext.Provider
        value={{
          page_id,
          query,
          generatePage,
          queryPhrase,
          setQueryPhrase,
          searchValue,
          setSearchValue,
          page,
          setPage,
          movieCards,
          setMovieCards,
        }}
      >
        <SearchPanel />
        <MovieCardsPanel />
      </MovieContext.Provider>
    </div>
  );
};

export default Main;
