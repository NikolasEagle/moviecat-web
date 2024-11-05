import styles from "./ResultsInfo.module.scss";

const ResultsInfo = ({ query, data }) =>
  query ? (
    <h3 className={styles.results_info}>
      {data.length ? "Результаты по запросу" : "По запросу"} - {query}
      {data.length ? "" : " - не найдено результатов"}
    </h3>
  ) : null;

export default ResultsInfo;
