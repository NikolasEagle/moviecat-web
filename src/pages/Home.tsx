import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./Main.tsx";
import Movie from "./Movie.tsx";

const Home = () => {
  return (
    <Routes>
      <Route path="/pages/:page_id" element={<Main />}></Route>
      <Route path="/search/:query/pages/:page_id" element={<Main />}></Route>
      <Route path="/movies/:movie_id" element={<Movie />}></Route>
      <Route path="/*" element={<Navigate to={"/pages/1"} />}></Route>
    </Routes>
  );
};

export default Home;
