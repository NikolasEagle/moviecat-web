import React, { useContext } from "react";

import styles from "./MovieCardsPanel.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

function MovieCardsPanel() {
  const context = useContext(MainContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return (
    <div
      id="movie_panel"
      className={
        !contextDevice.tv
          ? styles.panel
          : [styles["panel"], styles["panel_tv"]].join(" ")
      }
    >
      {context.movieCards}
    </div>
  );
}

export default MovieCardsPanel;
