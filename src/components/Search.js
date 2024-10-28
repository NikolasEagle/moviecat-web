import { useState } from "react";
import styles from "./Search.module.scss";

function Search() {
  const [searchPhrase, setSearchPhrase] = useState("");

  let search = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div className={styles.search_panel}>
      <input
        placeholder="Поиск..."
        className={styles.search}
        value={searchPhrase}
        onChange={(event) => setSearchPhrase(event.target.value)}
      />
      <button className={styles.search_button} onClick={search}></button>
    </div>
  );
}

export default Search;
