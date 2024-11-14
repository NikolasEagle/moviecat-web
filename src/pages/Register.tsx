import React, { useState } from "react";

import styles from "./Register.module.scss";

import FormRegister from "../components/register/FormRegister.tsx";

import RegisterContext from "../contexts/RegisterContext.tsx";

import Download from "../components/additional/Download.tsx";
import Error from "../components/additional/Error.tsx";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");

  const [name, setName] = useState<string>("");

  const [surname, setSurname] = useState<string>("");

  const [content, setContent] = useState<React.JSX.Element>(<FormRegister />);

  async function sendReq(event: React.ChangeEvent<HTMLFormElement>) {
    setContent(<Download />);

    event.preventDefault();

    try {
      let response: Response = await fetch("/register", {
        method: "POST",
        body: JSON.stringify({
          email: email,

          name: name,

          surname: surname,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        let { name, surname, email } = await response.json();

        setContent(
          <>
            <p>
              {surname} {name} ваша заявка принята в работу.
              <br />
              После рассмотрения на почту {email} будет выслан пароль для входа.
            </p>
            <button onClick={() => navigate("/")}>
              Вернуться на страницу входа
            </button>
          </>
        );
      } else if (response.status === 409) {
        setContent(
          <>
            <FormRegister />,
            <Error message={"Пользователь с таким email уже существует"} />
          </>
        );
      }
    } catch (error) {
      setContent(
        <>
          <FormRegister />,
          <Error message={"Ошибка подключения к серверу"} />
        </>
      );
    }
  }
  return (
    <div className={styles.register}>
      <RegisterContext.Provider
        value={{
          sendReq,
          setEmail,
          email,
          setName,
          name,
          setSurname,
          surname,
        }}
      >
        {content}
      </RegisterContext.Provider>
    </div>
  );
};
export default Register;
