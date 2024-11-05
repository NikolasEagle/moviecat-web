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
        height="100%"
        width="100%"
        src={context.trailer}
        frameborder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
