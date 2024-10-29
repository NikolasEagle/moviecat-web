import styles from "./MovieCard.module.scss";

const MovieCard = ({ year, rating, name, poster }) => {
  return (
    <div
      style={{
        background: poster,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      tabIndex={0}
      className={styles.card}
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
