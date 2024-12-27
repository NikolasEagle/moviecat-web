import React, { useContext } from "react";

import styles from "./TopPanel.module.scss";

import Poster from "./Poster.tsx";
import Info from "./Info.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

const TopPanel = () => {
  const contextDevice = useContext(DeviceContext) as contextDevice;
  return (
    <div className={styles.top_panel}>
      <div
        className={
          !contextDevice.tv
            ? styles.info
            : [styles["info"], styles["info_tv"]].join(" ")
        }
      >
        <Poster />
        <Info />
      </div>
    </div>
  );
};

export default TopPanel;
