import styles from "./Card.module.scss";

function Card({ film }) {
  return (
    <div
      style={{
        background: `url(${film.small_poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={styles.card}
      id={film["id"]}
    ></div>
  );
}

export default Card;
