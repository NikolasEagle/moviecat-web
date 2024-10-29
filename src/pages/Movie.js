import { useEffect, useState } from "react";

import MovieContext from "../contexts/MovieContext.js";

import { useParams } from "react-router-dom";

import Error from "../components/additional/Error";

const Movie = () => {
  let { movie_id } = useParams();

  let [title, setTitle] = useState("");

  useEffect(() => {
    generatePage();
  }, []);

  async function generatePage() {
    let url = `/api/movies/info/${movie_id}`;

    try {
      let response = await fetch(url);

      let body = await response.json();

      setTitle(body.name_russian);
    } catch (error) {
      setTitle(<Error message={error.message} />);
    }
  }

  return (
    <div>
      <MovieContext.Provider value={{ title }}>
        <h1>{title}</h1>
      </MovieContext.Provider>
    </div>
  );
};

export default Movie;
