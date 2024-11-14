import React, { useEffect, useState } from "react";

import styles from "./Movie.module.scss";

import Description from "../components/movie/Description.tsx";
import Trailer from "../components/movie/Trailer.tsx";
import Player from "../components/movie/Player.tsx";

import MovieContext from "../contexts/MovieContext.tsx";

import { useParams } from "react-router-dom";

import Error from "../components/additional/Error.tsx";
import Download from "../components/additional/Download.tsx";
import TopPanel from "../components/movie/TopPanel.tsx";

const Movie = () => {
  let { movie_id } = useParams();

  let [movieData, setMovieData] = useState<any>();

  useEffect(() => {
    generatePage();
  }, []);

  async function generatePage() {
    let url = `https://kinobd.xyz/api/films/${movie_id}`;

    try {
      let response = await fetch(url);

      let body = await response.json();

      setMovieData(body);
    } catch (error) {
      setMovieData(<Error />);
    }
  }

  return (
    <MovieContext.Provider value={{ movieData }}>
      {movieData ? (
        <div className={styles.movie}>
          <TopPanel />
          <Description />

          <Player />
        </div>
      ) : (
        <Download />
      )}
    </MovieContext.Provider>
  );
};

export default Movie;
