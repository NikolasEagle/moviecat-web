import styles from "./PageButtonsPanel.module.scss";

import { useContext } from "react";

import MainContext from "../../contexts/MainContext.js";

import { useNavigate } from "react-router-dom";

const PageButtonsPanel = ({ prev_page, next_page }) => {
  const context = useContext(MainContext);

  const navigate = useNavigate();

  return (
    <nav className={styles.panel}>
      {prev_page ? (
        <button
          onClick={() => {
            if (context.query) {
              navigate(`/search/${context.query}/pages/1`);
            } else {
              navigate(`/pages/1`);
            }
          }}
        >
          В начало
        </button>
      ) : null}

      {prev_page ? (
        <button
          onClick={() => {
            if (context.query) {
              navigate(
                `/search/${context.query}/pages/${+context.page_id - 1}`
              );
            } else {
              navigate(`/pages/${+context.page_id - 1}`);
            }
          }}
        >
          &lt;
        </button>
      ) : null}

      {next_page ? (
        <button
          onClick={() => {
            if (context.query) {
              navigate(
                `/search/${context.query}/pages/${+context.page_id + 1}`
              );
            } else {
              navigate(`/pages/${+context.page_id + 1}`);
            }
          }}
        >
          &gt;
        </button>
      ) : null}
    </nav>
  );
};

export default PageButtonsPanel;
