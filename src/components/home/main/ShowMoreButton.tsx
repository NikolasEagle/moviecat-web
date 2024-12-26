import React, { useContext } from "react";

import styles from "./ShowMoreButton.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

type Props = {
  next_page: string | null;
};

const ShowMoreButton = ({ next_page }: Props) => {
  const context = useContext(MainContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return (
    next_page && (
      <div
        className={
          !contextDevice.tv
            ? styles.show_more
            : [styles["show_more"], styles["show_more_tv"]].join(" ")
        }
      >
        <button
          tabIndex={3}
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
