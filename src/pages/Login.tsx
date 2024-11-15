import React, { useContext, useState } from "react";

import styles from "./Login.module.scss";

import FormLogin from "../components/login/FormLogin.tsx";

import AuthContext, { contextTypeAuth } from "../contexts/AuthContext.tsx";
import LoginContext from "../contexts/LoginContext.tsx";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

import { Navigate } from "react-router-dom";

const Login = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [content, setContent] = useState<React.JSX.Element>(<FormLogin />);

  async function sendReq(event: React.ChangeEvent<HTMLFormElement>) {
    setContent(<Download />);

    event.preventDefault();

    try {
      let response: Response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,

          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        setContent(<FormLogin />);
        context.setAuth(true);
      } else if (response.status === 401) {
        setContent(
          <>
            <FormLogin />
            <Error message={"Неверный логин или пароль"} />
          </>
        );
      } else if (response.status === 500) {
        setContent(
          <>
            <FormLogin />
            <Error message={"Ошибка подключения к серверу"} />
          </>
        );
      }
    } catch (error) {
      setContent(
        <>
          <FormLogin />
          <Error message={"Ошибка подключения к серверу"} />
        </>
      );
    }
  }
  return (
    <div className={styles.login}>
      <LoginContext.Provider
        value={{ sendReq, setEmail, email, setPassword, password }}
      >
        {content}
      </LoginContext.Provider>
    </div>
  );
};
export default Login;
