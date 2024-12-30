import React, { useEffect, useRef } from "react";

import styles from "./Player.module.scss";

interface Props {
  kpId: number | null;
}

function KinoboxPlayer({ kpId }: Props) {
  const containerRef = useRef(null);

  const elementReady = (selector) =>
    new Promise((resolve) => {
      const observer = new MutationObserver((mutations, obs) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector)); // Промис выполнен, элемент найден
          obs.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });
    });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: { kinopoisk: kpId },
          players: {
            collaps: {
              enable: true,
            },
          },
          menu: {
            enable: false,
          },
        });
      }
    };

    (async () => {
      const iframe = await elementReady(".kinobox_iframe");
    })();

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {}
    };
  }, [kpId]);

  return <div ref={containerRef} className={styles.kinobox_player}></div>;
}

export default KinoboxPlayer;
