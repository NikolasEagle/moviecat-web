import React, { useContext, useEffect } from "react";

import styles from "./MovieCardsPanel.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

function MovieCardsPanel() {
  const context = useContext(MainContext) as contextType;

  useEffect(() => {
    context.generatePage(1);
  }, [context.query]);

  return <div className={styles.panel}>{context.movieCards}</div>;
}

export default MovieCardsPanel;
