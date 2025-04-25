import React, { useEffect, useRef } from "react";

import styles from "./Player.module.scss";

interface Props {
  tmdbId: number | null;
}

function KinoboxPlayer({ tmdbId }: Props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window as any).kbox(containerRef.current, {
          search: { tmdb: tmdbId },
          players: {
            alloha: {
              enable: true,
            },
          },
          menu: {
            enable: false,
          },
        });
      }
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {}
    };
  }, [tmdbId]);

  return (
    <>
      <div
        id="kinobox_player"
        ref={containerRef}
        className={styles.kinobox_player}
      ></div>
    </>
  );
}

export default KinoboxPlayer;
