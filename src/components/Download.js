import styles from "./Download.module.scss";

function Download() {
  return (
    <div className={styles["cssload-thecube"]}>
      <div
        className={[styles["cssload-cube"], styles["cssload-c1"]].join(" ")}
      ></div>
      <div
        className={[styles["cssload-cube"], styles["cssload-c2"]].join(" ")}
      ></div>
      <div
        className={[styles["cssload-cube"], styles["cssload-c3"]].join(" ")}
      ></div>
      <div
        className={[styles["cssload-cube"], styles["cssload-c4"]].join(" ")}
      ></div>
    </div>
  );
}

export default Download;
