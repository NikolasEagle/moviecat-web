import React, { useContext } from "react";

import styles from "./Description.module.scss";

import MovieContext, { contextType } from "../../contexts/MovieContext.tsx";

const Description = () => {
  const context = useContext(MovieContext) as contextType;

  return <p className={styles.description}>{context.movieData.description}</p>;
};

export default Description;
