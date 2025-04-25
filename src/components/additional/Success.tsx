import React from "react";

import styles from "./Success.module.scss";

import { Link } from "react-router-dom";

const Success = ({ surname, name, email }) => {
  return (
    <div className={styles.success}>
      <p>
        <b>
          {name} {surname}
        </b>
      </p>
      <div>
        <p>
          Ваша заявка принята в работу.
          <br />
          После рассмотрения на почту
        </p>
        <p>
          <b>{email}</b>
        </p>
        <p>будет выслан пароль для входа.</p>
      </div>
      <Link to="/">Вернуться на страницу входа</Link>
    </div>
  );
};

export default Success;
