import styles from "./Movie.module.scss";

import { useEffect, useState } from "react";

import Poster from "../components/movie/Poster.js";
import Info from "../components/movie/Info.js";

import MovieContext from "../contexts/MovieContext.js";

import { useParams } from "react-router-dom";

import Error from "../components/additional/Error";
import Download from "../components/additional/Download.js";

const Movie = () => {
  let { movie_id } = useParams();

  let [movieData, setMovieData] = useState("");

  useEffect(() => {
    generatePage();
  }, []);

  async function generatePage() {
    let url = `/api/movies/info/${movie_id}`;

    try {
      let response = await fetch(url);

      let body = await response.json();

      setMovieData(body);
    } catch (error) {
      setMovieData(<Error message={error.message} />);
    }
  }

  return (
    <MovieContext.Provider value={movieData}>
      {movieData ? (
        <div className={styles.top_panel}>
          <Poster />
          <Info />
        </div>
      ) : (
        <Download />
      )}
    </MovieContext.Provider>
  );
};

export default Movie;
