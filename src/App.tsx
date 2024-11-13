import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import Main from "./pages/Main.tsx";
import Movie from "./pages/Movie.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const App = (): React.JSX.Element => (
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
