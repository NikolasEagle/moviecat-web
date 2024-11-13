import styles from "./Movie.module.scss";

import React, { useEffect, useState } from "react";

import Description from "../components/movie/Description.js";
import Trailer from "../components/movie/Trailer.js";
import Player from "../components/movie/Player.js";

import MovieContext from "../contexts/MovieContext.js";

import { useParams } from "react-router-dom";

import Error from "../components/additional/Error.js";
import Download from "../components/additional/Download.js";
import TopPanel from "../components/movie/TopPanel.js";

const Movie = () => {
  let { movie_id } = useParams();

  let [movieData, setMovieData] = useState<
    React.JSX.Element | React.JSX.Element[]
  >([]);

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
    <MovieContext.Provider value={movieData}>
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
