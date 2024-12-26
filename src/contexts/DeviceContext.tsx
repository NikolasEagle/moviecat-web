import React from "react";

export type contextDevice = {
  tv: boolean;
};

export default React.createContext<contextDevice | null>(null);
