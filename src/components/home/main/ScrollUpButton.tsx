import React, { useEffect, useState } from "react";

import styles from "./ScrollUpButton.module.scss";

const ScrollUpButton = () => {
  let [hidden, setHidden] = useState<boolean>(true);

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
    <button
      hidden={hidden}
      onClick={scrollUp}
      className={styles.scrollup_button}
    ></button>
  );
};

export default ScrollUpButton;
