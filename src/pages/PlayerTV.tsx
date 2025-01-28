import React, { useEffect } from "react";

import styles from "./PlayerTV.module.scss";

import { useParams } from "react-router";

import KinoboxPlayer from "../components/home/movie/KinoboxPlayer.tsx";

const PlayerTV = () => {
  const { movie_id } = useParams();

  return (
    <div tabIndex={0} className={styles.player_tv}>
      <KinoboxPlayer kpId={movie_id ? Number(movie_id) : null} />
    </div>
  );
};

export default PlayerTV;
