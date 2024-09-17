import { createContext } from "react";

export const GLobalContext = createContext<TGlobalContext>({
  setAlLCharacters: () => {},
  setLiveStatus: () => {},
  setGenderStatus: () => {},
  setCharacterName: () => {},
  resetAllSelectors: () => {},
  setLoadingGeneral: () => {},
  setEpisodeName: () => {},
  allCharacters: [],
  gender: "",
  liveStatus: "",
  characterName: "",
  episodeName: "",
  loadingGeneral: false,
  allEpisodes: [],
});

interface TGlobalContext {
  setAlLCharacters: React.Dispatch<React.SetStateAction<any[]>>;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
  setGenderStatus: React.Dispatch<React.SetStateAction<string>>;
  setLiveStatus: React.Dispatch<React.SetStateAction<string>>;
  setLoadingGeneral: React.Dispatch<React.SetStateAction<boolean>>;
  setEpisodeName: React.Dispatch<React.SetStateAction<string>>;
  allCharacters: any[];
  loadingGeneral: boolean;
  gender: string;
  liveStatus: string;
  characterName: string;
  allEpisodes: any[];
  episodeName: string;
  resetAllSelectors: () => void;
}
