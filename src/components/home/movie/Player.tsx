import React, { useContext } from "react";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

import KinoboxPlayer from "./KinoboxPlayer.tsx";

const Player = () => {
  const context = useContext(MovieContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return !contextDevice.tv ? (
    <KinoboxPlayer tmdbId={context.movieData.id} />
  ) : null;
};

export default Player;
