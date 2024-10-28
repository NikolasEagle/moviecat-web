import styles from "./Panel.module.scss";

import Download from "./Download";

import Card from "./Card";

import { useState, useEffect } from "react";

function Panel() {
  const [films, setFilms] = useState("");

  useEffect(() => {
    fetch("/api/films/")
      .then((response) => response.json())
      .then((body) => {
        setFilms(body.data.map((film) => <Card film={film} />));
      })
      .catch((err) => console.log(err));
  }, [films]);

  return <div className={styles.panel}>{films ? films : <Download />}</div>;
}

export default Panel;
