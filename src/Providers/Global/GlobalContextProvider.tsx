import React, { PropsWithChildren, useState, useEffect } from "react";
import { GLobalContext } from "./GlobalContext";
import { public_axios } from "../../utils/API/publicAxios";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [allCharacters, setAlLCharacters] = useState<any[]>([]);

  const getAllCharacters = async () => {
    const resp = await public_axios.get("/character");
    setAlLCharacters(resp.data.results);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <GLobalContext.Provider value={{ allCharacters, setAlLCharacters }}>
      {children}
    </GLobalContext.Provider>
  );
};
