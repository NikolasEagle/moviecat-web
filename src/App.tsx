import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Main from "./pages/Main.tsx";
import Movie from "./pages/Movie.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import AuthContext from "./contexts/AuthContext.tsx";

const App = () => {
  const [auth, setAuth] = useState<boolean>(false);

  const [conn, setConn] = useState<boolean>(false);

  async function checkAuth() {
    try {
      let response: Response = await fetch("/login", {
        method: "POST",
      });
      if (response.status === 201) {
        setAuth(true);
        setConn(true);
      } else if (response.status === 401) {
        setAuth(false);
        setConn(true);
      } else if (response.status === 500) {
        setConn(false);
      }
    } catch (error) {
      setConn(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ checkAuth, setAuth, auth }}>
      <Router basename="/">
        <Routes>
          <Route element={conn ? <Outlet /> : <Navigate to={"/error"} />}>
            <Route element={!auth ? <Outlet /> : <Navigate to={"/"} />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </Route>
            <Route element={auth ? <Outlet /> : <Navigate to={"/login"} />}>
              <Route path="/pages/:page_id" element={<Main />}></Route>
              <Route
                path="/search/:query/pages/:page_id"
                element={<Main />}
              ></Route>
              <Route path="/movies/:movie_id" element={<Movie />}></Route>
            </Route>
            <Route path="*" element={<ErrorPage status={404} />}></Route>
            <Route
              path="/"
              element={<Navigate to={"/pages/1"} replace />}
            ></Route>
          </Route>
          <Route element={!conn ? <Outlet /> : <Navigate to={"/"} />}>
            <Route path="/error" element={<ErrorPage status={500} />}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
