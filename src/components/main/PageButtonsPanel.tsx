import React, { useContext } from "react";

import styles from "./PageButtonsPanel.module.scss";

import MainContext, { contextType } from "../../contexts/MainContext.tsx";

type Props = {
  prev_page: string | null;
  next_page: string | null;
};

const PageButtonsPanel = ({ prev_page, next_page }: Props) => {
  const context = useContext(MainContext) as contextType;

  return (
    <nav className={styles.panel}>
      {prev_page && (
        <button
          onClick={() => {
            if (context.query) {
              context.navigate(`/search/${context.query}/pages/1`);
            } else {
              context.navigate(`/pages/1`);
            }
          }}
        >
          {" "}
          В начало{" "}
        </button>
      )}

      {prev_page && (
        <button
          onClick={() => {
            if (context.query) {
              context.navigate(
                `/search/${context.query}/pages/${Number(context.page_id) - 1}`
              );
            } else {
              context.navigate(`/pages/${Number(context.page_id) - 1}`);
            }
          }}
        >
          &lt;
        </button>
      )}

      {next_page && (
        <button
          onClick={() => {
            if (context.query) {
              context.navigate(
                `/search/${context.query}/pages/${Number(context.page_id) + 1}`
              );
            } else {
              context.navigate(`/pages/${Number(context.page_id) + 1}`);
            }
          }}
        >
          &gt;
        </button>
      )}
    </nav>
  );
};

export default PageButtonsPanel;
