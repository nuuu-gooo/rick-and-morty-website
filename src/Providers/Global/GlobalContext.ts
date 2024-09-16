import { createContext } from "react";

export const GLobalContext = createContext<TGlobalContext>({
  setAlLCharacters: () => {},
  setLiveStatus: () => {},
  setGenderStatus: () => {},
  setCharacterName: () => {},
  resetAllSelectors: () => {},
  setLoadingGeneral: () => {},
  allCharacters: [],
  gender: "",
  liveStatus: "",
  characterName: "",
  loadingGeneral: false,
});

interface TGlobalContext {
  setAlLCharacters: React.Dispatch<React.SetStateAction<any[]>>;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
  setGenderStatus: React.Dispatch<React.SetStateAction<string>>;
  setLiveStatus: React.Dispatch<React.SetStateAction<string>>;
  setLoadingGeneral: React.Dispatch<React.SetStateAction<boolean>>;
  allCharacters: any[];
  loadingGeneral: boolean;
  gender: string;
  liveStatus: string;
  characterName: string;
  resetAllSelectors: () => void;
}
