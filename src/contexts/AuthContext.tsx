import React, { Dispatch } from "react";

export type contextTypeAuth = {
  setToken: Dispatch<boolean>;
  name: string;
  surName: string;
};

export default React.createContext<contextTypeAuth | null>(null);
