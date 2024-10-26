import styles from "./Panel.module.scss";

import { useState, useEffect } from "react";

function Panel() {
  const [films, setFilms] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((response) => response.json())
      .then((body) => {
        setFilms(
          body.data.map((film) => (
            <div className={styles.card} id={film["id"]}>
              {film["name_russian"]}
            </div>
          ))
        );
      })
      .catch((err) => setFilms(<div>Не найдено</div>));
  }, []);

  return <div className={styles.panel}>{films}</div>;
}

export default Panel;
