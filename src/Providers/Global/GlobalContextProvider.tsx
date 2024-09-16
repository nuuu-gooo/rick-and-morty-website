import React, { PropsWithChildren, useState, useEffect } from "react";
import { GLobalContext } from "./GlobalContext";
import { public_axios } from "../../utils/API/publicAxios";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [allCharacters, setAlLCharacters] = useState<any[]>([]);
  const [liveStatus, setLiveStatus] = useState<string>("");
  const [gender, setGenderStatus] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  const [loadingGeneral, setLoadingGeneral] = useState<boolean>(false);
  // const [singleCharacter, setSingleCharacter] = useState<string>("");

  const getAllCharacters = async () => {
    try {
      setLoadingGeneral(true);
      const resp = await public_axios.get(
        `/character/?name=${characterName}&status=${liveStatus}&gender=${gender}`
      );
      setAlLCharacters(resp.data.results);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoadingGeneral(false);
    }
  };

  // const fetchSingleCharacter = async (singleCharacterId: string) => {
  //   const resp = await public_axios.get(`/character/${singleCharacterId}`);
  //   setSingleCharacter(resp.data);
  // };
  // console.log(singleCharacter);

  useEffect(() => {
    if (allCharacters) {
      getAllCharacters();
    }
  }, [liveStatus, gender, characterName]);

  const resetAllSelectors = () => {
    setLiveStatus("");
    setGenderStatus("");
    setCharacterName("");
  };

  return (
    <GLobalContext.Provider
      value={{
        setLoadingGeneral,
        loadingGeneral,
        allCharacters,
        setAlLCharacters,
        setLiveStatus,
        setGenderStatus,
        setCharacterName,
        gender,
        liveStatus,
        characterName,
        resetAllSelectors,
        // setSingleCharacter,
        // singleCharacter,
        // fetchSingleCharacter,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};
