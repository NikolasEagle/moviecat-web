import React, { Dispatch } from "react";

export type contextType = {
  query: string | undefined;
  generatePage: (page_id: number) => Promise<void>;
  showMore: (page_id: number) => void;
  searchValue: string;
  setSearchValue: Dispatch<string>;
  result: string | null;
  setResult: Dispatch<string | null>;
  movieCards: React.JSX.Element[];
  setMovieCards: Dispatch<React.JSX.Element[]>;
};

export default React.createContext<contextType | null>(null);
