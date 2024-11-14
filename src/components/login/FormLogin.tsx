import React from "react";

import "./FormLogin.module.scss";

const FormLogin = () => {
  return (
    <form method="post" action="/login">
      <input type="text" name="login" placeholder="Логин..." required />
      <input type="password" name="Password" placeholder="Пароль..." required />
      <button type="submit">Войти</button>
      <p>
        Не зарегистрированы? <a href="/register">Регистрация</a>
      </p>
    </form>
  );
};

export default FormLogin;
