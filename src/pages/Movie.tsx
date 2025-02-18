import React, { useEffect, useState, useContext } from "react";

import styles from "./Movie.module.scss";

import TopPanel from "../components/home/movie/TopPanel.tsx";
import Description from "../components/home/movie/Description.tsx";
import Player from "../components/home/movie/Player.tsx";

import AuthContext, { contextTypeAuth } from "../contexts/AuthContext.tsx";
import DeviceContext, { contextDevice } from "../contexts/DeviceContext.tsx";
import MovieContext, { contextType } from "../contexts/MovieContext.tsx";

import { useParams } from "react-router-dom";

import Error from "../components/additional/Error.tsx";
import Download from "../components/additional/Download.tsx";
import BackButton from "../components/home/movie/BackButton.tsx";

const Movie = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  useEffect(() => {
    context.checkAuth();

    generatePage();
  }, []);

  let { movie_id } = useParams();

  let [movieData, setMovieData] = useState<contextType["movieData"]>({
    id: movie_id,
    title: null,
    release_date: null,
    production_countries: [],
    budget: null,
    genres: [],
    overview: null,
    poster_path: null,
    vote_average: null,
  });

  let [movieContent, setMovieContent] = useState<React.JSX.Element>(
    <Download height={"calc(85vh)"} />
  );

  async function generatePage() {
    let url = `/api/movie/${movie_id}`;

    try {
      let response: Response = await fetch(url);

      let body: contextType["movieData"] = await response.json();

      setMovieData(body);

      setMovieContent(
        <div className={styles.movie}>
          {!contextDevice.tv && <BackButton />}
          <TopPanel />
          <Description />
          <Player />
        </div>
      );
    } catch (error) {
      setMovieContent(<Error message={"Ошибка подключения к серверу API"} />);
    }
  }

  return (
    <MovieContext.Provider value={{ movieData }}>
      {movieContent}
    </MovieContext.Provider>
  );
};

export default Movie;
