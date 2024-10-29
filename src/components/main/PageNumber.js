import styles from "./PageNumber.module.scss";

const PageNumber = ({ currentPage }) =>
  currentPage ? (
    <h3 className={styles.page_number}>Страница {currentPage}</h3>
  ) : null;

export default PageNumber;
