import { useContext } from "react";

import styles from "./Player.module.scss";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Player = () => {
  const context = useContext(MovieContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return !contextDevice.tv ? (
    <iframe className={styles.player} src={`https://mars.allarknow.online/?tmdb=${context.movieData.id}&token=de19b0b4e75ce15a9be8e63c0f5858`} width="100%" height="370" frameBorder="0" allowFullScreen allow="autoplay *; fullscreen *"></iframe>
  ) : null;
};

export default Player;
