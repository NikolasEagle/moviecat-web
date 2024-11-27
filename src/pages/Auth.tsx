import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login.tsx";
import Register from "./Register.tsx";

const Auth = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/*" element={<Navigate to={"/login"} />}></Route>
    </Routes>
  );
};

export default Auth;
