import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Auth from "./pages/Auth.tsx";
import Home from "./pages/Home.tsx";

import AuthContext from "./contexts/AuthContext.tsx";
import DeviceContext from "./contexts/DeviceContext.tsx";
import Download from "./components/additional/Download.tsx";

import { isSmartTV } from "react-device-detect";

const App = () => {
  const [tv, setTv] = useState<boolean>(false);

  const [token, setToken] = useState<boolean | null>(null);

  const [name, setName] = useState<string>("Name");

  const [surName, setSurName] = useState<string>("Surname");

  async function checkAuth() {
    let response: Response = await fetch("/login", {
      method: "POST",
    });
    if (response.status === 201) {
      let { name, surname } = await response.json();

      setName(name);

      setSurName(surname);

      setToken(true);
    } else if (response.status === 401) {
      setToken(false);
    }
  }

  async function logout() {
    await fetch("/logout", { method: "POST", credentials: "same-origin" });
  }

  useEffect(() => {
    checkAuth();
    setTv(isSmartTV);
  }, []);

  return (
    <DeviceContext.Provider value={{ tv }}>
      <AuthContext.Provider
        value={{ checkAuth, setToken, name, surName, logout }}
      >
        <Router>
          {token === null ? (
            <Routes>
              <Route
                element={<Download height={"calc(100vh - 50px)"} />}
              ></Route>
            </Routes>
          ) : token ? (
            <Home />
          ) : (
            <Auth />
          )}
        </Router>
      </AuthContext.Provider>
    </DeviceContext.Provider>
  );
};

export default App;
