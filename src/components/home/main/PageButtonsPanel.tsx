import React, { useContext } from "react";

import styles from "./PageButtonsPanel.module.scss";

import MainContext, { contextType } from "../../../contexts/MainContext.tsx";
import { Link } from "react-router-dom";

type Props = {
  prev_page: string | null;
  next_page: string | null;
};

const PageButtonsPanel = ({ prev_page, next_page }: Props) => {
  const context = useContext(MainContext) as contextType;

  return (
    <nav className={styles.panel}>
      {prev_page && (
        <Link
          to={context.query ? `/search/${context.query}/pages/1` : `/pages/1`}
        >
          В начало
        </Link>
      )}

      {prev_page && (
        <Link
          to={
            context.query
              ? `/search/${context.query}/pages/${Number(context.page_id) - 1}`
              : `/pages/${Number(context.page_id) - 1}`
          }
        >
          Пред.
        </Link>
      )}

      {next_page && (
        <Link
          to={
            context.query
              ? `/search/${context.query}/pages/${Number(context.page_id) + 1}`
              : `/pages/${Number(context.page_id) + 1}`
          }
        >
          След.
        </Link>
      )}
    </nav>
  );
};

export default PageButtonsPanel;
