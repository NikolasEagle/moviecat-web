import React, { Dispatch } from "react";

import { NavigateFunction } from "react-router-dom";

export type contextType = {
  page_id: string | undefined;
  query: string | undefined;
  navigate: NavigateFunction;
  generatePage: () => Promise<void>;
  searchValue: string;
  setSearchValue: Dispatch<string>;
  movieCards: React.JSX.Element[] | React.JSX.Element;
  setMovieCards: Dispatch<React.JSX.Element[] | React.JSX.Element>;
};

export default React.createContext<contextType | null>(null);
