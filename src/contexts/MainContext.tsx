import React, { Dispatch } from "react";

import { NavigateFunction } from "react-router-dom";

export type contextType = {
  query: string | undefined;
  navigate: NavigateFunction;
  generatePage: (page_id: number) => Promise<void>;
  showMore: (next_page: string) => void;
  searchValue: string;
  setSearchValue: Dispatch<string>;
  result: string | undefined;
  setResult: Dispatch<string | undefined>;
  movieCards: React.JSX.Element[];
  setMovieCards: Dispatch<React.JSX.Element[]>;
};

export default React.createContext<contextType | null>(null);
