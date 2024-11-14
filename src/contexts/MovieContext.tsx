import React from "react";

export type contextType = {
  movieData: React.JSX.Element | React.JSX.Element[] | any;
};

export default React.createContext<contextType | null>(null);
