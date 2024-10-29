import styles from "./Main.module.scss";

import Header from "../components/main/Header.js";
import SearchPanel from "../components/main/SearchPanel.js";
import MovieCardsPanel from "../components/main/MovieCardsPanel.js";
import MovieCard from "../components/main/MovieCard.js";
import PageButtonsPanel from "../components/main/PageButtonsPanel.js";

import { useParams } from "react-router-dom";
import { useState } from "react";

import MovieContext from "../contexts/MovieContext.js";

import { useNavigate } from "react-router-dom";

import Download from "../components/additional/Download.js";
import NotFound from "../components/additional/NotFound.js";
import Error from "../components/additional/Error.js";

const Main = () => {
  const navigate = useNavigate();

  let { page_id, query } = useParams();

  let [searchPhrase, setSearchPhrase] = useState("");

  let [movieCards, setMovieCards] = useState([]);

  async function generatePage(page_id = 1, query) {
    setMovieCards(<Download />);

    let url;

    console.log(query);

    if (query) {
      query = query.replace(" ", "_");
      url = `/api/movies/search/${query}/pages/${page_id}`;
      navigate(`/search/${query}/pages/${page_id}`);
    } else {
      url = `/api/movies/pages/${page_id}`;
      navigate(`/pages/${page_id}`);
    }

    try {
      let response = await fetch(url);

      let body = await response.json();

      let data = body.data;

      console.log(body.next_page_url);

      setMovieCards([
        ...data.map((movie) => (
          <MovieCard
            id={movie.id}
            year={movie.year}
            rating={movie.rating_kp || movie.rating_imdb}
            name={movie.name_russian || movie.name_original}
            poster={movie.small_poster || movie.big_poster || "/default.png"}
          />
        )),
        <PageButtonsPanel
          first_page={body.first_page_url}
          prev_page={body.prev_page_url}
          next_page={body.next_page_url}
        />,
      ]);
    } catch (error) {
      setMovieCards(<Error message={error.message} />);
    }
  }

  return (
    <div className={styles.main}>
      <Header />
      <MovieContext.Provider
        value={{
          page_id,
          query,
          generatePage,
          searchPhrase,
          setSearchPhrase,
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
