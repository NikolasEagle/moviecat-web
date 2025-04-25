import React, { Dispatch } from "react";

export type contextTypeAuth = {
  checkAuth: () => Promise<void>;
  setToken: Dispatch<boolean>;
  name: string;
  surName: string;
  logout: () => Promise<void>;
};

export default React.createContext<contextTypeAuth | null>(null);
