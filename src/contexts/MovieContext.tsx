import React from "react";

type contextType = {
  movieData: React.JSX.Element | React.JSX.Element[];
};

export default React.createContext<contextType | null>(null);
