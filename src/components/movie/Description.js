import styles from "./Description.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Description = () => {
  const context = useContext(MovieContext);

  return <p className={styles.description}>{context.description}</p>;
};

export default Description;
