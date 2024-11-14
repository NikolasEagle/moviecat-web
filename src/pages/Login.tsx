import React from "react";

import styles from "./Login.module.scss";

import Header from "../components/additional/Header.tsx";
import FormLogin from "../components/login/FormLogin.tsx";

import LoginContext from "../contexts/LoginContext.tsx";
import { Navigate } from "react-router-dom";

const Login = ({ isAuth }) => {
  return isAuth ? (
    <Navigate to={"/"} replace />
  ) : (
    <div className={styles.login}>
      <LoginContext.Provider value={null}>
        <Header />
        <FormLogin />
      </LoginContext.Provider>
    </div>
  );
};
export default Login;
