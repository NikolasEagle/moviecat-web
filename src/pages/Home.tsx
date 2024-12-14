import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Main from "./Main.tsx";
import Movie from "./Movie.tsx";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/user" element={<Main />}></Route>
      <Route path="/search/:query" element={<Main />}></Route>
      <Route path="/search/:query/user" element={<Main />}></Route>
      <Route path="/movies/:movie_id" element={<Movie />}></Route>
      <Route path="/login" element={<Navigate to={"/"} />}></Route>
    </Routes>
  );
};

export default Home;
