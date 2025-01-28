import React, { useContext } from "react";

import styles from "./ShowMoreButton.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";

import DeviceContext, {
  contextDevice,
} from "../../../contexts/DeviceContext.tsx";

type Props = {
  current_page: string | number;
  next_page: string | null;
  has_more: boolean;
};

const ShowMoreButton = ({ current_page, next_page, has_more }: Props) => {
  const context = useContext(MainContext) as contextType;

  const contextDevice = useContext(DeviceContext) as contextDevice;

  return (
    (next_page || has_more) && (
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
            if (has_more) {
              context.showMore(
                `https://kinobd.xyz/api/films/search/title?page=${
                  Number(current_page) + 1
                }`
              );
            } else {
              context.showMore(next_page);
            }
          }}
        >
          Показать еще
        </button>
      </div>
    )
  );
};

export default ShowMoreButton;
