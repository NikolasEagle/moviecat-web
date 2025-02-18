import React, { useContext, useEffect, useState } from "react";

import styles from "./Main.module.scss";

import TopPanel from "../components/home/main/TopPanel.tsx";
import MovieCardsPanel from "../components/home/main/MovieCardsPanel.tsx";
import MovieCard from "../components/home/main/MovieCard.tsx";
import ShowMoreButton from "../components/home/main/ShowMoreButton.tsx";
import ScrollUpButton from "../components/home/main/ScrollUpButton.tsx";

import AuthContext, { contextTypeAuth } from "../contexts/AuthContext.tsx";
import DeviceContext, { contextDevice } from "../contexts/DeviceContext.tsx";
import MovieContext from "../contexts/MainContext.tsx";

import { useParams } from "react-router-dom";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

type Data = {
  id: number;
  title: string | null;
  release_date: string | null;
  vote_average: number | null;
  poster_path: string | null;
};

const Main = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

  const contextDevice = useContext(DeviceContext) as contextDevice;

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
      setMovieCards([<Download height={"calc(100vh - 200px)"} />]);
    } else {
      setMovieCards([
        ...movieCards.slice(0, -1),
        <Download
          height={!contextDevice.tv ? "20px" : `${(220 - 30) * 1.5}px`}
        />,
      ]);
    }

    let url: string;

    if (query) {
      url = `/api/movies/search/${query}/${page_id}`;
    } else {
      url = `/api/movies/${page_id}`;
    }

    try {
      let response = await fetch(url);

      let body: {
        results: Data[] | [];
        page: number;
        total_pages: number;
      } = await response.json();

      if (page_id === 1) {
        setMovieCards([
          ...body.results.map((movie: Data, index: number) => (
            <MovieCard index={index} movie={movie} />
          )),
          <ShowMoreButton page={body.page} total_pages={body.total_pages} />,
        ]);
      } else {
        setMovieCards([
          ...movieCards.slice(0, -1),
          ...body.results.map((movie: Data, index: number) => (
            <MovieCard index={index} movie={movie} />
          )),
          <ShowMoreButton page={body.page} total_pages={body.total_pages} />,
        ]);
      }

      setResult(query === undefined ? null : query);
    } catch (error) {
      setMovieCards([<Error message={"Ошибка подключения к серверу API"} />]);
    }
  }

  function showMore(page_id: number) {
    context.checkAuth();
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
