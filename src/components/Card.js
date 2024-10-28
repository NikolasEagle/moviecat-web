import styles from "./Card.module.scss";

function Card({ film }) {
  return (
    <div tabIndex={0} className={styles.card} id={film["id"]}>
      <div className={styles.top_panel}>
        <div className={styles.year}>{film.year}</div>
        {film.rating_kp ? (
          <div className={styles.rating}>{film.rating_kp}</div>
        ) : (
          ""
        )}
      </div>

      <img src={film.small_poster} />

      <div>{film.name_russian}</div>
    </div>
  );
}

export default Card;
