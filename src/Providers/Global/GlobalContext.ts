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
  allLocations: [],
  allCharacters: [],
  allEpisodes: [],
  gender: "",
  liveStatus: "",
  characterName: "",
  episodeName: "",
  locationName: "",
  loadingGeneral: false,
});

interface TGlobalContext {
  setAlLCharacters: React.Dispatch<React.SetStateAction<any[]>>;
  setCharacterName: React.Dispatch<React.SetStateAction<string>>;
  setGenderStatus: React.Dispatch<React.SetStateAction<string>>;
  setLiveStatus: React.Dispatch<React.SetStateAction<string>>;
  setLoadingGeneral: React.Dispatch<React.SetStateAction<boolean>>;
  setEpisodeName: React.Dispatch<React.SetStateAction<string>>;
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
  allLocations: any[];
  allCharacters: any[];
  allEpisodes: any[];
  loadingGeneral: boolean;
  gender: string;
  liveStatus: string;
  characterName: string;
  episodeName: string;
  locationName: string;
  resetAllSelectors: () => void;
}
