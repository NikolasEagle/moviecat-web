import styles from "./Card.module.scss";

function Card({ film }) {
  return (
    <div
      tabIndex={0}
      style={{
        background: `linear-gradient(to top, black, transparent), url(${film.small_poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={styles.card}
      id={film["id"]}
    >
      <div className={styles.top_panel}>
        <div className={styles.year}>{film.year}</div>
        <div className={styles.rating}>{film.rating_kp}</div>
      </div>

      <div>{film.name_russian}</div>
    </div>
  );
}

export default Card;
