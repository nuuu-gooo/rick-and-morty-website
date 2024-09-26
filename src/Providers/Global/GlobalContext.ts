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
  allLocations: [],
  allCharacters: [],
  allEpisodes: [],
  gender: "",
  liveStatus: "",
  characterName: "",
  episodeName: "",
  locationName: "",
  loadingGeneral: false,
  serverDownStatus: false,
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
  allLocations: any[];
  allCharacters: any[];
  allEpisodes: any[];
  loadingGeneral: boolean;
  serverDownStatus: boolean;
  gender: string;
  liveStatus: string;
  characterName: string;
  episodeName: string;
  locationName: string;
  resetAllSelectors: () => void;
}
