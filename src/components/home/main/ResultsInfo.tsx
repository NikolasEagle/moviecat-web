import React from "react";

import styles from "./ResultsInfo.module.scss";

type Props = {
  query: string | undefined;

  data: object[] | [];
};

const ResultsInfo = ({ query, data }: Props) =>
  query ? (
    <h3 className={styles.results_info}>
      {data.length
        ? `Результаты по запросу - ${query}`
        : `По запросу - ${query} - не найдено результатов`}
    </h3>
  ) : null;

export default ResultsInfo;
