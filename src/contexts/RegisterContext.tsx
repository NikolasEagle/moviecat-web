import React, { Dispatch } from "react";

export type contextType = {
  sendReq: (event: React.ChangeEvent<HTMLFormElement>) => Promise<void>;
  setEmail: Dispatch<string>;
  email: string;
  setName: Dispatch<string>;
  name: string;
  setSurname: Dispatch<string>;
  surname: string;
};

export default React.createContext<contextType | null>(null);
