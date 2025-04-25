import React, { Dispatch } from "react";

export type contextType = {
  sendReq: (event: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  setEmail: Dispatch<string>;
  email: string;
  setPassword: Dispatch<string>;
  password: string;
};

export default React.createContext<contextType | null>(null);
