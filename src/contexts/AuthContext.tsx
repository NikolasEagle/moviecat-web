import React, { Dispatch } from "react";

export type contextTypeAuth = {
  setToken: Dispatch<boolean>;
};

export default React.createContext<contextTypeAuth | null>(null);
