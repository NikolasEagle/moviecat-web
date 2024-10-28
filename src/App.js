import styles from "./App.module.scss";

import Header from "./components/Header.js";
import Panel from "./components/Panel.js";
import Card from "./components/Card.js";
import SearchPanel from "./components/SearchPanel.js";
import NavigationBar from "./components/NavigationBar.js";

import { createContext, useState } from "react";
import Download from "./components/Download.js";

export const FilmsContext = createContext();

function App() {
  const [films, setFilms] = useState("");

  const [searchPhrase, setSearchPhrase] = useState("");

  let callAPI = async (page = "1", search = "") => {
    setFilms(<Download />);

    let url;

    if (search) {
      url = `/api/films/search/${search.replace(" ", "_")}`;
    } else {
      url = `/api/films/${page}`;
    }

    try {
      let response = await fetch(url);

      let body = await response.json();

      if (!body.data.length) {
        setFilms(<div>Не найдено результатов по запросу "{search}"</div>);
      } else {
        setFilms(body.data.map((film) => <Card film={film} />));
      }
    } catch (error) {
      setFilms(<div>Не найдено</div>);
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <FilmsContext.Provider
        value={{ searchPhrase, setSearchPhrase, films, callAPI }}
      >
        <SearchPanel />
        <Panel />
        <NavigationBar />
      </FilmsContext.Provider>
    </div>
  );
}

export default App;
