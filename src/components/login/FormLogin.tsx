import React, { useContext } from "react";

import "./FormLogin.module.scss";

import LoginContext, { contextType } from "../../contexts/LoginContext.tsx";

import Header from "../additional/Header.tsx";

const FormLogin = () => {
  const context = useContext(LoginContext) as contextType;

  return (
    <>
      <Header />
      <form
        onSubmit={(event: React.ChangeEvent<HTMLFormElement>) =>
          context.sendReq(event)
        }
      >
        <input
          type="text"
          name="email"
          placeholder="Email..."
          required
          value={context.email}
          onChange={(event) => context.setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль..."
          required
          value={context.password}
          onChange={(event) => context.setPassword(event.target.value)}
        />
        <button type="submit">Войти</button>
        <p>
          Не зарегистрированы? <a href="/register">Регистрация</a>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
