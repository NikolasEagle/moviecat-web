import styles from "./Trailer.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const Trailer = () => {
  const context = useContext(MovieContext);

  return (
    <div className={styles.trailer}>
      <h3>Трейлер</h3>

      <iframe
        id="ytplayer"
        type="text/html"
        width="820"
        height="482"
        src={context.trailer}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailer;
