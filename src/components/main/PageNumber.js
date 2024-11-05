import styles from "./PageNumber.module.scss";

const PageNumber = ({ currentPage }) =>
  currentPage ? (
    <h5 className={styles.page_number}>Страница {currentPage}</h5>
  ) : null;

export default PageNumber;
