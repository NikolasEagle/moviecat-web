import styles from "./Register.module.scss";

import Header from "../components/additional/Header";
import FormRegister from "../components/register/FormRegister";

import RegisterContext from "../contexts/RegisterContext";

const Register = () => {
  async function sendReq(event) {
    event.preventDefault();

    let data = JSON.stringify(Object.fromEntries(new FormData(event.target)));

    try {
      let response = await fetch("/register", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        let body = await response.json();

        console.log(body);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.register}>
      <RegisterContext.Provider value={{ sendReq }}>
        <h2>Запрос на регистрацию</h2>
        <FormRegister />
      </RegisterContext.Provider>
    </div>
  );
};
export default Register;
