import styles from "./Panel.module.scss";

import Download from "./Download";
import { FilmsContext } from "../App";
import { useContext, useEffect } from "react";

function Panel() {
  const context = useContext(FilmsContext);

  console.log(context);

  useEffect(() => {
    context.callAPI(1);
  }, []);

  return (
    <div className={styles.panel}>
      {context.films ? context.films : <Download />}
    </div>
  );
}

export default Panel;
