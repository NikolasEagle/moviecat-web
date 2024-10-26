import styles from "./App.module.scss";

import Header from "./components/Header.js";

import Search from "./components/Search.js";

import Panel from "./components/Panel.js";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Search />
      <Panel />
    </div>
  );
}

export default App;
