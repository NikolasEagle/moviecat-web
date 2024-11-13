import "./FormRegister.module.scss";

import { useContext } from "react";

import RegisterContext from "../../contexts/RegisterContext";

const FormRegister = () => {
  const context = useContext(RegisterContext);

  return (
    <>
      <h2>Запрос на регистрацию</h2>
      <form onSubmit={(event) => context.sendReq(event)}>
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
        <button type="submit">Отправить запрос</button>
      </form>
    </>
  );
};

export default FormRegister;
