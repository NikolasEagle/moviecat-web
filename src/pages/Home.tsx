import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./Main.tsx";
import Movie from "./Movie.tsx";
import PlayerTV from "./PlayerTV.tsx";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/user" element={<Main />}></Route>
      <Route path="/search/:query" element={<Main />}></Route>
      <Route path="/search/:query/user" element={<Main />}></Route>
      <Route path="/movies/:media_type/:movie_id" element={<Movie />}></Route>
      <Route path="/player/:movie_id" element={<PlayerTV />}></Route>
      <Route path="/login" element={<Navigate to={"/"} />}></Route>
      <Route path="/register" element={<Navigate to={"/"} />}></Route>
    </Routes>
  );
};

export default Home;
