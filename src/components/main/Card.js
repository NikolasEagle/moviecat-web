import styles from "./Card.module.scss";

function Card({ film }) {
  return (
    <div
      style={{
        background: film.small_poster
          ? `linear-gradient(to top, black, transparent), url(${film.small_poster})`
          : `linear-gradient(to top, black, transparent), url(default.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      tabIndex={0}
      className={styles.card}
      id={film["id"]}
    >
      <div className={styles.top_panel}>
        <div className={styles.year}>{film.year}</div>
        {film.rating_kp ? (
          <div className={styles.rating}>{film.rating_kp}</div>
        ) : (
          ""
        )}
      </div>

      <div>{film.name_russian}</div>
    </div>
  );
}

export default Card;
