import styles from "./Download.module.scss";

const Download = () => (
  <div className={styles.download}>
    <div className={styles["cssload-loader"]}>
      <div
        className={[styles["cssload-inner"], styles["cssload-one"]].join(" ")}
      ></div>
      <div
        className={[styles["cssload-inner"], styles["cssload-two"]].join(" ")}
      ></div>
      <div
        className={[styles["cssload-inner"], styles["cssload-three"]].join(" ")}
      ></div>
    </div>
  </div>
);

export default Download;
