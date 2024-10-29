import styles from "./Main.module.scss";

import Header from "../components/main/Header.js";
import MovieCardsPanel from "../components/main/Panel.js";
import SearchPanel from "../components/main/SearchPanel.js";
import NavigationBar from "../components/main/NavigationBar.js";

import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import MovieContext from "../contexts/MovieContext.js";

const Main = () => {
  let { page_id } = useParams();

  let [searchPhrase, setSearchPhrase] = useState();

  let [movieCards, setMovieCards] = useState();

  return (
    <div className={styles.main}>
      <Header />
      <MovieContext.Provider value={(page_id, searchPhrase, movieCards)}>
        <SearchPanel />
        <MovieCardsPanel />
        <NavigationBar />
      </MovieContext.Provider>
    </div>
  );
};
