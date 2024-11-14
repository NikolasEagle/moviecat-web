import React, { useState } from "react";

import styles from "./Main.module.scss";

import SearchPanel from "../components/main/SearchPanel.tsx";
import ResultsInfo from "../components/main/ResultsInfo.tsx";
import PageNumber from "../components/main/PageNumber.tsx";
import MovieCardsPanel from "../components/main/MovieCardsPanel.tsx";
import MovieCard from "../components/main/MovieCard.tsx";
import PageButtonsPanel from "../components/main/PageButtonsPanel.tsx";

import MovieContext from "../contexts/MainContext.tsx";

import { useParams, useNavigate } from "react-router-dom";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

const Main = () => {
  const navigate = useNavigate();

  let { page_id, query } = useParams();

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

      let body: {
        data:
          | {
              id: number;
              year: string | null;
              rating_kp: string | null;
              rating_imdb: string | null;
              small_poster: string | null;
              big_poster: string | null;
              name_original: string | null;
              name_russian: string | null;
            }[]
          | [];
        current_page: number;
        prev_page_url: string | null;
        next_page_url: string | null;
      } = await response.json();

      setMovieCards([
        <ResultsInfo query={query} data={body.data} />,
        <PageNumber currentPage={body.current_page} data={body.data} />,
        ...body.data.map(
          (movie: {
            id: number;

            year: string | null;

            rating_kp: string | null;

            rating_imdb: string | null;

            small_poster: string | null;

            big_poster: string | null;

            name_original: string | null;

            name_russian: string | null;
          }) => <MovieCard movie={movie} />
        ),
        <PageButtonsPanel
          prev_page={body.prev_page_url}
          next_page={body.next_page_url}
        />,
      ]);
    } catch (error) {
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
