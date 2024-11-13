import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import ProtectedRoute from "./pages/ProtectedRoute.js";
import Main from "./pages/Main.js";
import Movie from "./pages/Movie.js";
import ErrorPage from "./pages/ErrorPage.js";

const App = () => (
  <Router basename="/">
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/pages/:page_id" element={<Main />}></Route>
        <Route path="/search/:query/pages/:page_id" element={<Main />}></Route>
        <Route path="/movies/:movie_id" element={<Movie />}></Route>
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  </Router>
);

export default App;
