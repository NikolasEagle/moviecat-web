import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Auth from "./pages/Auth.tsx";
import Home from "./pages/Home.tsx";

import AuthContext from "./contexts/AuthContext.tsx";
import Download from "./components/additional/Download.tsx";

const App = () => {
  const [token, setToken] = useState<boolean | null>(null);

  async function checkAuth() {
    let response: Response = await fetch("/login", {
      method: "POST",
    });
    if (response.status === 201) {
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
    <AuthContext.Provider value={{ setToken }}>
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
