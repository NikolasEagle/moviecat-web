import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Auth from "./pages/Auth.tsx";
import Home from "./pages/Home.tsx";

import AuthContext from "./contexts/AuthContext.tsx";
import Download from "./components/additional/Download.tsx";

const App = () => {
  const [token, setToken] = useState<boolean | null>(true);

  const [name, setName] = useState<string>("");

  const [surName, setSurName] = useState<string>("");

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

  useEffect(() => {
    checkAuth();
    setInterval(() => {
      checkAuth();
    }, 3000);
  }, []);

  return (
    <AuthContext.Provider value={{ setToken, name, surName }}>
      <Router>
        {token === null ? (
          <Routes>
            <Route element={<Download />}></Route>
          </Routes>
        ) : token ? (
          <Home />
        ) : (
          <Auth />
        )}
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
