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
import Error from "../components/additional/Error.js";

const Main = () => {
  let { page_id, query } = useParams();

  let [searchValue, setSearchValue] = useState("");

  let [movieCards, setMovieCards] = useState([]);

  async function generatePage() {
    setMovieCards(<Download />);

    let url;

    if (query) {
      let queryLowerCase = query.replace(/ /g, "_");
      url = `https://kinobd.xyz/api/films/search/title?q=${queryLowerCase}&&page=${page_id}`;
    } else {
      url = `https://kinobd.xyz/api/films?page=${page_id}`;
    }

    try {
      let response = await fetch(url);

      let body = await response.json();

      let data = body.data;

      setMovieCards([
        <ResultsInfo
          query={query ? query.replace(/_/g, " ") : null}
          data={data.length}
        />,
        <PageNumber currentPage={data.length ? body.current_page : null} />,
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
          searchValue,
          setSearchValue,
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
