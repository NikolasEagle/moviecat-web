import React, { useContext, useEffect, useState } from "react";

import styles from "./Main.module.scss";

import TopPanel from "../components/home/main/TopPanel.tsx";
import ResultsInfo from "../components/home/main/ResultsInfo.tsx";
import PageNumber from "../components/home/main/PageNumber.tsx";
import MovieCardsPanel from "../components/home/main/MovieCardsPanel.tsx";
import MovieCard from "../components/home/main/MovieCard.tsx";
import PageButtonsPanel from "../components/home/main/PageButtonsPanel.tsx";

import AuthContext, { contextTypeAuth } from "../contexts/AuthContext.tsx";
import MovieContext from "../contexts/MainContext.tsx";

import { useParams, useNavigate } from "react-router-dom";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

const Main = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

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
      let response: Response = await fetch(url);

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
      setMovieCards(<Error message={"Ошибка подключения к серверу API"} />);
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
        <TopPanel />
        <MovieCardsPanel />
      </MovieContext.Provider>
    </div>
  );
};

export default Main;
