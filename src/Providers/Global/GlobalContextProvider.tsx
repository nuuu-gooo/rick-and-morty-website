import React, { PropsWithChildren, useState, useEffect } from "react";
import { GLobalContext } from "./GlobalContext";
import { public_axios } from "../../utils/API/publicAxios";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [allCharacters, setAlLCharacters] = useState<any[]>([]);
  const [liveStatus, setLiveStatus] = useState<string>("");
  const [gender, setGenderStatus] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");

  const getAllCharacters = async () => {
    const resp = await public_axios.get(
      `/character/?name=${characterName}&status=${liveStatus}&gender=${gender}`
    );
    setAlLCharacters(resp.data.results);
  };

  console.log(allCharacters);

  useEffect(() => {
    getAllCharacters();
  }, [allCharacters, liveStatus, gender, characterName]);

  return (
    <GLobalContext.Provider
      value={{
        allCharacters,
        setAlLCharacters,
        setLiveStatus,
        setGenderStatus,
        setCharacterName,
        gender,
        liveStatus,
        characterName,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};
