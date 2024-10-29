import styles from "./Rating.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Rating = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.rating}>
      <div className={styles.age}>
        <p>
          <strong>{context.age_restriction}+</strong>
        </p>
      </div>
      <div className={styles.kp}>
        <div></div>
        <p style={{ color: "orange" }}>
          <strong>{context.rating_kp}</strong>
        </p>
      </div>
      <div className={styles.imdb}>
        <div></div>
        <p style={{ color: "yellow" }}>
          <strong>{context.rating_imdb}</strong>
        </p>
      </div>
    </div>
  );
};

export default Rating;
