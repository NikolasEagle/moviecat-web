import React, { useContext, useEffect, useState } from "react";

import styles from "./Main.module.scss";

import TopPanel from "../components/home/main/TopPanel.tsx";
import MovieCardsPanel from "../components/home/main/MovieCardsPanel.tsx";
import MovieCard from "../components/home/main/MovieCard.tsx";
import ShowMoreButton from "../components/home/main/ShowMoreButton.tsx";
import ScrollUpButton from "../components/home/main/ScrollUpButton.tsx";

import AuthContext, { contextTypeAuth } from "../contexts/AuthContext.tsx";
import MovieContext from "../contexts/MainContext.tsx";

import { useParams } from "react-router-dom";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

const Main = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

  let { query } = useParams();

  let [searchValue, setSearchValue] = useState<string>("");

  let [movieCards, setMovieCards] = useState<React.JSX.Element[]>([]);

  let [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    generatePage(1);
    context.checkAuth();
  }, [query]);

  async function generatePage(page_id: number) {
    if (page_id === 1) {
      setResult(null);
      setMovieCards([<Download height={"calc(100vh - 250px)"} />]);
    } else {
      setMovieCards([...movieCards.slice(0, -1), <Download height={"20px"} />]);
    }

    let url: string;

    if (query) {
      url = `https://kinobd.xyz/api/films/search/title?q=${query}&page=${page_id}`;
    } else {
      url = `https://kinobd.xyz/api/films/top?page=${page_id}`;
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

      if (page_id === 1) {
        setMovieCards([
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
          <ShowMoreButton next_page={body.next_page_url} />,
        ]);
      } else {
        setMovieCards([
          ...movieCards.slice(0, -1),
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
          <ShowMoreButton next_page={body.next_page_url} />,
        ]);
      }

      setResult(query === undefined ? null : query);
    } catch (error) {
      setMovieCards([<Error message={"Ошибка подключения к серверу API"} />]);
    }
  }

  function showMore(next_page: string) {
    context.checkAuth();

    const params = new URLSearchParams(
      next_page.slice(next_page.indexOf("?") + 1)
    );

    const page_id = Number(params.get("page"));

    generatePage(page_id);
  }
  return (
    <div className={styles.main}>
      <MovieContext.Provider
        value={{
          query,
          generatePage,
          showMore,
          searchValue,
          setSearchValue,
          result,
          setResult,
          movieCards,
          setMovieCards,
        }}
      >
        <TopPanel />
        <MovieCardsPanel />
        <ScrollUpButton />
      </MovieContext.Provider>
    </div>
  );
};

export default Main;
