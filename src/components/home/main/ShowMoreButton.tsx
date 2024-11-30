import React, { useContext } from "react";

import styles from "./ShowMoreButton.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

type Props = {
  next_page: string | null;
};

const ShowMoreButton = ({ next_page }: Props) => {
  const context = useContext(MainContext) as contextType;

  console.log(next_page);

  return (
    next_page && (
      <button
        onClick={() => {
          context.showMore(next_page);
        }}
        className={styles.show_more}
      >
        Показать еще
      </button>
    )
  );
};

export default ShowMoreButton;
