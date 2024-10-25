import { createContext } from "react";

export const GLobalContext = createContext<TGlobalContext>({
  setAlLCharacters: () => {},
  setLiveStatus: () => {},
  setGenderStatus: () => {},
  setCharacterName: () => {},
  resetAllSelectors: () => {},
  setLoadingGeneral: () => {},
  setEpisodeName: () => {},
  setLocationName: () => {},
  setServerDownStatus: () => {},
  setDarkModeStatus: () => {},
  getAllCharactersFunction: async () => {},
  allLocations: [],
  allCharacters: [],
  allEpisodes: [],
  searchedCharacters: [],
  gender: "",
  liveStatus: "",
  characterName: "",
  episodeName: "",
  locationName: "",
  loadingGeneral: false,
  serverDownStatus: false,
  darkModeStatus: false,
});

interface TGlobalContext {
  setAlLCharacters: React.Dispatch<React.SetStateAction<any[]>>;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
  setGenderStatus: React.Dispatch<React.SetStateAction<string>>;
  setLiveStatus: React.Dispatch<React.SetStateAction<string>>;
  setLoadingGeneral: React.Dispatch<React.SetStateAction<boolean>>;
  setEpisodeName: React.Dispatch<React.SetStateAction<string>>;
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
  setServerDownStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkModeStatus: React.Dispatch<React.SetStateAction<boolean>>;
  allLocations: any[];
  allCharacters: any[];
  allEpisodes: any[];
  loadingGeneral: boolean;
  serverDownStatus: boolean;
  darkModeStatus: boolean;
  gender: string;
  liveStatus: string;
  characterName: string;
  episodeName: string;
  locationName: string;
  searchedCharacters: any[];
  getAllCharactersFunction: (e: any) => Promise<void>;
  resetAllSelectors: () => void;
}
