import React from "react";

import styles from "./BackButton.module.scss";

import { useNavigate } from "react-router";

import Header from "../../additional/Header.tsx";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.back_button}>
      <button
        onClick={() => {
          navigate(-1);
        }}
      ></button>
      <div>
        <Header size={"small"} />
      </div>
    </div>
  );
};

export default BackButton;
