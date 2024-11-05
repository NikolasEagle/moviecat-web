import styles from "./Poster.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Poster = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.poster}>
      <img src={context.big_poster || context.small_poster || "/default.png"} />
    </div>
  );
};

export default Poster;
