import React, { Dispatch } from "react";

type contextType = {
  sendReq: (event: Event) => Promise<void>;
  setEmail: Dispatch<string>;
  email: string;
  setName: Dispatch<string>;
  name: string;
  setSurname: Dispatch<string>;
  surname: string;
};

export default React.createContext<contextType | null>(null);
