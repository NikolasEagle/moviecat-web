import React, { useContext } from "react";

import styles from "./AccountPopup.module.scss";

import AuthContext, {
  contextTypeAuth,
} from "../../../contexts/AuthContext.tsx";
import { useNavigate } from "react-router";

const AccountPopup = ({ popup }) => {
  const context = useContext(AuthContext) as contextTypeAuth;

  const navigate = useNavigate();

  return (
    popup && (
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={styles.popup}
      >
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
              navigate("/login");
            }}
          >
            Выйти
          </a>
        </div>
      </div>
    )
  );
};

export default AccountPopup;
