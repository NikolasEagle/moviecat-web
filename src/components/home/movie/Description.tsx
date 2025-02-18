import React, { useContext } from "react";

import styles from "./Description.module.scss";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

import MovieContext, { contextType } from "../../../contexts/MovieContext.tsx";

const Description = () => {
  const context = useContext(MovieContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return (
    <p
      tabIndex={!contextDevice.tv ? -1 : 0}
      className={
        !contextDevice.tv
          ? styles.description
          : [styles["description"], styles["description_tv"]].join(" ")
      }
    >
      {context.movieData.overview}
    </p>
  );
};

export default Description;
