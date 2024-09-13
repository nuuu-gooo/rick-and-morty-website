import { createContext } from "react";

export const GLobalContext = createContext<TGlobalContext>({
  setAlLCharacters: () => {},
  setLiveStatus: () => {},
  setGenderStatus: () => {},
  setCharacterName: () => {},
  allCharacters: [],
  gender: "",
  liveStatus: "",
  characterName: "",
});

interface TGlobalContext {
  setAlLCharacters: React.Dispatch<React.SetStateAction<any[]>>;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
  setGenderStatus: React.Dispatch<React.SetStateAction<string>>;
  setLiveStatus: React.Dispatch<React.SetStateAction<string>>;
  allCharacters: any[];
  gender: string;
  liveStatus: string;
  characterName: string;
}
