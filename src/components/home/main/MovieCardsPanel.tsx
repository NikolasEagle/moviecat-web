import React, { useContext, useEffect } from "react";

import styles from "./MovieCardsPanel.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

function MovieCardsPanel() {
  const context = useContext(MainContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  useEffect(() => {
    if (contextDevice.tv) {
      const moviePanel: any = document.querySelector("#movie_panel");

      moviePanel?.addEventListener("scroll", (event) => {
        event.preventDefault();
      });

      window.addEventListener("keydown", (event) => {
        for (let card of moviePanel?.children) {
          if (
            document.activeElement === card &&
            Array.from(moviePanel?.children).indexOf(card) !== 0
          ) {
            if (event.key === "ArrowRight") {
              moviePanel?.scrollBy(174 - 35 + 40, 0);
            } else if (event.key === "ArrowLeft") {
              moviePanel?.scrollBy(-(174 - 35 + 40), 0);
            }
          }
        }
      });
    }
  }, []);

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
