import React from "react";

import styles from "./PageNumber.module.scss";

type Props = {
  currentPage: number;
  data: object[] | [];
};

const PageNumber = ({ currentPage, data }: Props) =>
  data.length ? (
    <h5 className={styles.page_number}>Страница {currentPage}</h5>
  ) : null;

export default PageNumber;
