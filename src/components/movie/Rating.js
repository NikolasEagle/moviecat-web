import styles from "./Rating.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Rating = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.rating}>
      {context.age_restriction && (
        <div className={styles.age}>
          <p>
            <strong>{context.age_restriction}+</strong>
          </p>
        </div>
      )}
      {context.rating_kp && (
        <div className={styles.kp}>
          <div></div>
          <p style={{ color: "orange" }}>
            <strong>{context.rating_kp}</strong>
          </p>
        </div>
      )}
      {context.rating_imdb && (
        <div className={styles.imdb}>
          <div></div>
          <p style={{ color: "yellow" }}>
            <strong>{context.rating_imdb}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Rating;
