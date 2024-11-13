import React, { useContext, useEffect } from "react";

import styles from "./MovieCardsPanel.module.scss";

import MainContext, { contextType } from "../../contexts/MainContext.tsx";

function MovieCardsPanel() {
  const context = useContext(MainContext) as contextType;

  useEffect(() => {
    context.generatePage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [context.query, context.page_id]);

  return <div className={styles.panel}>{context.movieCards}</div>;
}

export default MovieCardsPanel;
