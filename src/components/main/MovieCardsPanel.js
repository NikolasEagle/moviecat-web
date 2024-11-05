import styles from "./MovieCardsPanel.module.scss";

import { useContext, useEffect } from "react";

import MainContext from "../../contexts/MainContext.js";

function MovieCardsPanel() {
  const context = useContext(MainContext);

  useEffect(() => {
    context.generatePage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [context.query, context.page_id]);

  return <div className={styles.panel}>{context.movieCards}</div>;
}

export default MovieCardsPanel;
