import styles from "./MovieCardsPanel.module.scss";

import { useContext, useEffect } from "react";

import MovieContext from "../../contexts/MainContext.js";

function MovieCardsPanel() {
  const context = useContext(MovieContext);

  useEffect(() => {
    context.generatePage(context.page_id, context.query);
  }, []);

  return <div className={styles.panel}>{context.movieCards}</div>;
}

export default MovieCardsPanel;
