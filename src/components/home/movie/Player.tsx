import React, { useContext, useEffect } from "react";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

import KinoboxPlayer from "./KinoboxPlayer.tsx";

const Player = () => {
  const context = useContext(MovieContext) as contextType;

  async function getPlayer() {
    const interval = setInterval(() => {
      if (document.querySelector(".kinobox_iframe")) {
        const iframe = document.querySelector(".kinobox_iframe");

        clearInterval(interval);
      }
    }, 3000);
  }

  useEffect(() => {}, []);

  return <KinoboxPlayer kpId={context.movieData.kinopoisk_id} />;
};

export default Player;
