import styles from "./App.module.scss";

import Header from "./components/Header.js";

import Panel from "./components/Panel.js";
import SearchPanel from "./components/SearchPanel.js";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SearchPanel />
      <Panel />
    </div>
  );
}

export default App;
