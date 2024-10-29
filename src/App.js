import "./App.module.scss";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main.js";
import Movie from "./pages/Movie.js";
import { useState } from "react";

const App = () => {
  let [globalQuery, setGlobalQuery] = useState("");

  return (
    <Routes>
      <Route path="/pages/:page_id" element={<Main />}></Route>
      <Route path="/search/:query/pages/:page_id" element={<Main />}></Route>
      <Route path="/movies/:movie_id" element={<Movie />}></Route>
    </Routes>
  );
};

export default App;

/*<Route path="/about_movie/:movie_id" element={<InfoMovie />}></Route>
<Route path="/player/:movie_id" element={<Player />}></Route>*/
