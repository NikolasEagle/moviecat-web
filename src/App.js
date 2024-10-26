import styles from "./App.module.scss";

import Header from "./components/Header.js";

import Search from "./components/Search.js";

const App = () => (
  <div className={styles.app}>
    <Header />
    <Search />
  </div>
);

export default App;
