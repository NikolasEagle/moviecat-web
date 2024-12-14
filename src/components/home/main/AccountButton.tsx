import React, { useState, useContext, useEffect } from "react";

import styles from "./AccountButton.module.scss";

import AuthContext, {
  contextTypeAuth,
} from "../../../contexts/AuthContext.tsx";

import { useNavigate } from "react-router";

const AccountButton = () => {
  const context = useContext(AuthContext) as contextTypeAuth;

  const [popup, setPopup] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(window.location.href.slice(-5, -1));
    if (window.location.href.slice(-4) === "user") {
      setPopup(true);
    } else {
      setPopup(false);
    }
  });

  function showHidePopup(event) {
    if (
      event.target.id === "shadow" ||
      (popup && event.target.tagName === "BUTTON")
    ) {
      navigate(-1);
    } else {
      navigate(
        `${
          window.location.pathname === "/" ? "" : window.location.pathname
        }/user`
      );
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
                  tabIndex={0}
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
