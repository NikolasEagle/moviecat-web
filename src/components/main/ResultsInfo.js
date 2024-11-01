import styles from "./ResultsInfo.module.scss";

const ResultsInfo = ({ query, data }) =>
  query ? (
    <h2 className={styles.results_info}>
      {data ? "Результаты по запросу" : "По запросу"} - {query}
      {data ? "" : " - не найдено результатов"}
    </h2>
  ) : null;

export default ResultsInfo;
