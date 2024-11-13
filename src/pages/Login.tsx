import React from "react";

import styles from "./Login.module.scss";

import Header from "../components/additional/Header";
import FormLogin from "../components/login/FormLogin";

import LoginContext from "../contexts/LoginContext";

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginContext.Provider value={{}}>
        <Header />
        <FormLogin />
      </LoginContext.Provider>
    </div>
  );
};
export default Login;
