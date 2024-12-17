import React, { useContext } from "react";

import styles from "./MovieCardsPanel.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

function MovieCardsPanel() {
  const context = useContext(MainContext) as contextType;

  return (
    <div role="select" className={styles.panel}>
      {context.movieCards}
    </div>
  );
}

export default MovieCardsPanel;
