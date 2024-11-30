import React, { useContext } from "react";

import styles from "./ResultsInfo.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

const ResultsInfo = () => {
  const context = useContext(MainContext) as contextType;

  return context.result ? (
    <h3 className={styles.results_info}>
      {context.movieCards.slice(0, -1).length
        ? `Результаты по запросу - ${context.query}`
        : `По запросу - ${context.query} - не найдено результатов`}
    </h3>
  ) : null;
};

export default ResultsInfo;
