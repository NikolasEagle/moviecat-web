import React from "react";

import styles from "./WatchTVButton.module.scss";

const WatchTVButton = ({}) => {
  return (
    <button
      autoFocus
      onClick={() => {
        /*{navigate(`/player/${}`)}*/
      }}
      className={styles.watch_button_tv}
    >
      Смотреть
    </button>
  );
};

export default WatchTVButton;
