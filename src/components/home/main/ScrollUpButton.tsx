import React, { useEffect, useState, useContext } from "react";

import styles from "./ScrollUpButton.module.scss";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

const ScrollUpButton = () => {
  let [hidden, setHidden] = useState<boolean>(true);

  const contextDevice = useContext(DeviceContext) as contextDevice;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    !contextDevice.tv && (
      <button
        hidden={hidden}
        tabIndex={-1}
        onClick={scrollUp}
        className={styles.scrollup_button}
      ></button>
    )
  );
};

export default ScrollUpButton;
