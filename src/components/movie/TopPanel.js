import styles from "./TopPanel.module.scss";

import Poster from "./Poster";
import Info from "./Info";

const TopPanel = () => (
  <div className={styles.top_panel}>
    <Poster />
    <Info />
  </div>
);

export default TopPanel;
