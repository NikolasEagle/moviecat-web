import React from "react";

import styles from "./ErrorPage.module.scss";

const ErrorPage = ({ status }) => {
  if (status === 404) {
    return (
      <div className={styles.error404}>Страница не найдена - {status}</div>
    );
  } else if (status === 500) {
    return (
      <div className={styles.error500}>
        Ошибка подключения к серверу - {status}
      </div>
    );
  }
};

export default ErrorPage;
