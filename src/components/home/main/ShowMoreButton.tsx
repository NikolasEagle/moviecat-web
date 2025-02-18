import React, { useContext } from "react";

import styles from "./ShowMoreButton.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

type Props = {
  page: number;
  total_pages: number;
};

const ShowMoreButton = ({ page, total_pages }: Props) => {
  const context = useContext(MainContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return (
    page !== total_pages && (
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
            context.showMore(page + 1);
          }}
        >
          Показать еще
        </button>
      </div>
    )
  );
};

export default ShowMoreButton;
