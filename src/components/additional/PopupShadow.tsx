import React from "react";

import styles from "./PopupShadow.module.scss";

const PopupShadow = ({ popup, showHidePopup }) => {
  return (
    popup && (
      <div
        id="shadow"
        onClick={(event) => {
          showHidePopup(event);
        }}
        className={styles.shadow}
      ></div>
    )
  );
};

export default PopupShadow;
