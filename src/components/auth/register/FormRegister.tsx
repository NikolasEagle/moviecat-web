import React, { useContext } from "react";

import styles from "./FormRegister.module.scss";

import RegisterContext, {
  contextType,
} from "../../../contexts/RegisterContext.tsx";

import { Link } from "react-router-dom";

const FormRegister = () => {
  const context = useContext(RegisterContext) as contextType;

  return (
    <div className={styles.form_register}>
      <h2>Запрос на регистрацию</h2>
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
          pattern="^\S+@\S+\.(org|ru|net|com)$"
          title="Введите корректный email"
          value={context.email}
          onChange={(event) => context.setEmail(event.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Имя..."
          required
          value={context.name}
          onChange={(event) => context.setName(event.target.value)}
        />
        <input
          type="text"
          name="surname"
          placeholder="Фамилия..."
          required
          value={context.surname}
          onChange={(event) => context.setSurname(event.target.value)}
        />
        <button className={styles.submit} type="submit">
          Отправить запрос
        </button>
        <Link to="/">Назад</Link>
      </form>
    </div>
  );
};

export default FormRegister;
