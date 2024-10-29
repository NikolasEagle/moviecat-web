import styles from "./PageButtonsPanel.module.scss";

import { useContext } from "react";

import MovieContext from "../../contexts/MovieContext.js";

const PageButtonsPanel = ({ first_page, prev_page, next_page }) => {
  const context = useContext(MovieContext);

  return (
    <nav className={styles.panel}>
      {prev_page ? (
        <button onClick={() => context.generatePage(1, context.searchPhrase)}>
          В начало
        </button>
      ) : null}

      {prev_page ? (
        <button
          onClick={() =>
            context.generatePage(
              Number(context.page_id) - 1,
              context.searchPhrase
            )
          }
        >
          &lt;
        </button>
      ) : null}

      {next_page ? (
        <button
          onClick={() =>
            context.generatePage(
              Number(context.page_id) + 1,
              context.searchPhrase
            )
          }
        >
          &gt;
        </button>
      ) : null}
    </nav>
  );
};

export default PageButtonsPanel;
