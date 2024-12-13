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
      <div className={styles.show_more}>
        <button
          onClick={() => {
            context.showMore(next_page);
          }}
        >
          Показать еще
        </button>
      </div>
    )
  );
};

export default ShowMoreButton;
