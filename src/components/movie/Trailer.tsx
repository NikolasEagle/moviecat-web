import React, { useContext } from "react";

import styles from "./Trailer.module.scss";

import MovieContext from "../../contexts/MovieContext.js";

const Trailer = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.trailer}>
      <h3>Трейлер</h3>

      <iframe
        id="ytplayer"
        height="100%"
        width="100%"
        src={context?.movieData.trailer}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
