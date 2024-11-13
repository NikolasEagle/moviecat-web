import React from "react";

import styles from "./Main.module.scss";

import SearchPanel from "../components/main/SearchPanel.tsx";
import ResultsInfo from "../components/main/ResultsInfo.tsx";
import PageNumber from "../components/main/PageNumber.tsx";
import MovieCardsPanel from "../components/main/MovieCardsPanel.tsx";
import MovieCard from "../components/main/MovieCard.tsx";
import PageButtonsPanel from "../components/main/PageButtonsPanel.tsx";

import { useState } from "react";

import MovieContext from "../contexts/MainContext.tsx";

import { useParams, useNavigate } from "react-router-dom";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

const Main = () => {
  let { page_id, query } = useParams();

  let navigate = useNavigate();

  let [searchValue, setSearchValue] = useState<string>("");

  let [movieCards, setMovieCards] = useState<
    React.JSX.Element[] | React.JSX.Element
  >([]);

  async function generatePage() {
    setMovieCards(<Download />);

    let url: string;

    if (query) {
      url = `https://kinobd.xyz/api/films/search/title?q=${query}&&page=${page_id}`;
    } else {
      url = `https://kinobd.xyz/api/films?page=${page_id}`;
    }

    try {
      let response = await fetch(url);

      let body = await response.json();

      let data = body.data;

      setMovieCards([
        <ResultsInfo query={query} data={data} />,
        <PageNumber currentPage={data.length ? body.current_page : null} />,
        ...data.map((movie: any) => (
          <MovieCard
            id={movie.id}
            year={movie.year}
            rating={movie.rating_kp || movie.rating_imdb || null}
            name={movie.name_russian || movie.name_original}
            poster={movie.small_poster || movie.big_poster || "/default.png"}
          />
        )),
        <PageButtonsPanel
          prev_page={body.prev_page_url}
          next_page={body.next_page_url}
        />,
      ]);
    } catch (error) {
      console.log(error.message);
      setMovieCards(<Error />);
    }
  }

  return (
    <div className={styles.main}>
      <MovieContext.Provider
        value={{
          page_id,
          query,
          navigate,
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
