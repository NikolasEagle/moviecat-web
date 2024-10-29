import styles from "./ResultsInfo.module.scss";

const ResultsInfo = ({ query }) =>
  query ? (
    <h2 className={styles.results_info}>Результаты по запросу - {query}</h2>
  ) : null;

export default ResultsInfo;
