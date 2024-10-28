import styles from "./Panel.module.scss";

import { useState, useEffect } from "react";

function Panel() {
  const [films, setFilms] = useState("");

  useEffect(() => {
    fetch("/api/films/")
      .then((response) => response.json())
      .then((body) => {
        setFilms(
          body.data.map((film) => (
            <div
              style={{
                background: `url(${film.small_poster})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className={styles.card}
              id={film["id"]}
            ></div>
          ))
        );
      })
      .catch((err) => setFilms(<div>Не найдено</div>));
  }, []);

  return <div className={styles.panel}>{films}</div>;
}

export default Panel;
