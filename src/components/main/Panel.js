import styles from "./Panel.module.scss";

import Download from "../Download";

import { useContext, useEffect } from "react";

function Panel({ pageId }) {
  useEffect(() => {
    context.callAPI(pageId);
  }, []);

  return (
    <div className={styles.panel}>
      {context.films ? context.films : <Download />}
    </div>
  );
}

export default Panel;
