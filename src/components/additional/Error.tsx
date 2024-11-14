import React from "react";

import styles from "./Error.module.scss";

type Props = {
  message: string;
};

const Error = ({ message }: Props) => (
  <div className={styles.error}>{message}</div>
);

export default Error;
