import styles from "./ResultsInfo.module.scss";

const ResultsInfo = ({ query, data }) =>
  query ? (
    <h2 className={styles.results_info}>
      {data.length ? "Результаты по запросу" : "По запросу"} - {query}
      {data.length ? "" : " - не найдено результатов"}
    </h2>
  ) : null;

export default ResultsInfo;
