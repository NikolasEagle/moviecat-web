import React, { Dispatch } from "react";

export type contextTypeAuth = {
  checkAuth: () => Promise<void>;
  auth: boolean;
  setAuth: Dispatch<boolean>;
};

export default React.createContext<contextTypeAuth | null>(null);
