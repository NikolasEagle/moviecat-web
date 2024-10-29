import styles from "./MovieCard.module.scss";

import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, year, rating, name, poster }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: `linear-gradient(to top, black, transparent), url(${poster})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      tabIndex={0}
      className={styles.card}
      onClick={() => navigate(`/movies/${id}`)}
    >
      <div className={styles.top_panel}>
        <div className={styles.year}>{year}</div>
        <div className={styles.rating} hidden={Boolean(!rating)}>
          {rating}
        </div>
      </div>

      <div>{name}</div>
    </div>
  );
};

export default MovieCard;
