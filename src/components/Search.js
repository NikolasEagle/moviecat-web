import { useState } from "react";
import styles from "./Search.module.scss";

function Search() {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <input
      placeholder="Поиск..."
      value={searchPhrase}
      onChange={(event) => setSearchPhrase(event.target.value)}
    />
  );
}

export default Search;
