import React, { useState, useContext } from "react";

import styles from "./AccountButton.module.scss";

import AuthContext, {
  contextTypeAuth,
} from "../../../contexts/AuthContext.tsx";

const AccountButton = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

  const [popup, setPopup] = useState<boolean>(false);

  function showHidePopup(event) {
    context.checkAuth();
    if (event.target.id === "shadow") {
      setPopup(false);
    } else {
      if (popup && event.target.tagName === "BUTTON") {
        setPopup(false);
      } else {
        setPopup(true);
      }
    }
  }

  return (
    <>
      <button
        onClick={(event) => {
          showHidePopup(event);
        }}
        className={styles.account_button}
      >
        {popup && (
          <>
            <div className={styles.popup}>
              <div className={styles.main}>
                <div className={styles.avatar}></div>
                <p>
                  {context.name} {context.surName}
                </p>
              </div>
              <div className={styles.bottom}>
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    context.logout();
                  }}
                >
                  Выйти
                </a>
              </div>
            </div>
          </>
        )}
      </button>
      {popup && (
        <div
          id="shadow"
          onClick={(event) => {
            showHidePopup(event);
          }}
          className={styles.shadow}
        ></div>
      )}
    </>
  );
};

export default AccountButton;
