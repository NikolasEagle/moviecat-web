import React, { useState, useEffect } from "react";

import styles from "./AccountButton.module.scss";

import { useLocation, useNavigate } from "react-router";

import AccountPopup from "./AccountPopup.tsx";
import PopupShadow from "../../additional/PopupShadow.tsx";

const AccountButton = () => {
  const [popup, setPopup] = useState<boolean>(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (
      /((^\/search\/[\wа-яёА-ЯЁ]+\/user$)|(^(?!\/search)\/user$))/g.test(
        decodeURI(location.pathname)
      )
    ) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  });

  function showHidePopup(event) {
    if (
      popup &&
      (event.target.tagName === "BUTTON" || event.target.id === "shadow")
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
        <AccountPopup popup={popup} />
      </button>
      <PopupShadow popup={popup} showHidePopup={showHidePopup} />
    </>
  );
};

export default AccountButton;
