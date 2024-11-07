import "./FormRegister.module.scss";

import { useContext } from "react";

import RegisterContext from "../../contexts/RegisterContext";

const FormRegister = () => {
  const context = useContext(RegisterContext);

  return (
    <form onSubmit={(event) => context.sendReq(event)}>
      <input type="text" name="login" placeholder="Логин..." required />
      <input
        type="text"
        name="email"
        placeholder="Email..."
        required
        pattern="^\S+@\S+\.(org|ru|net|com)$"
        title="Введите корректный email"
      />
      <input type="text" name="name" placeholder="Имя..." required />
      <input type="text" name="surname" placeholder="Фамилия..." required />
      <button type="submit">Отправить запрос</button>
    </form>
  );
};

export default FormRegister;
