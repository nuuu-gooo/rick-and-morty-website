import React, { PropsWithChildren } from "react";
import { GLobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  return <GLobalContext.Provider value={{}}>{children}</GLobalContext.Provider>;
};
