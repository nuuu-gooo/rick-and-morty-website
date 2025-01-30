import { PropsWithChildren, useState, useEffect } from "react";
import { GLobalContext } from "./GlobalContext";
import { public_axios } from "../../utils/API/publicAxios";
import { useNavigate } from "react-router-dom";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [allCharacters, setAlLCharacters] = useState<any[]>([]);
  const [liveStatus, setLiveStatus] = useState<string>("");
  const [gender, setGenderStatus] = useState<string>("");
  const [characterName, setCharacterName] = useState<string>("");
  const [loadingGeneral, setLoadingGeneral] = useState<boolean>(false);
  const [allEpisodes, setAllEpisodes] = useState<any[]>([]);
  const [episodeName, setEpisodeName] = useState<string>("");
  const [allLocations, setAllLocations] = useState<any[]>([]);
  const [locationName, setLocationName] = useState<string>("");
  const [serverDownStatus, setServerDownStatus] = useState<boolean>(false);
  const [darkModeStatus, setDarkModeStatus] = useState<boolean>(false);
  const navigate = useNavigate();
  const [searchedCharacters, setSearchedCharacters] = useState<any[]>([]);

  document.title = "Rick and Morty / TV SHOW";

  document.body.style.background = `${darkModeStatus && "bg-black"}`;

  useEffect(() => {
    if (allCharacters.length === 0) {
      setServerDownStatus(true);
    } else {
      setServerDownStatus(false);
      navigate("/");
    }
  }, [allCharacters.length, serverDownStatus]);

  const getAllCharacters = async () => {
    try {
      setLoadingGeneral(true);
      const resp = await public_axios.get(
        `/character/?name=${characterName}&status=${liveStatus}&gender=${gender}`
      );
      setAlLCharacters(resp.data.results);

      if (characterName !== "") {
        setSearchedCharacters(resp.data.results);
      } else {
        setSearchedCharacters([]);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoadingGeneral(false);
    }

    // try {
    //   setLoadingGeneral(true);
    //   const resp = await public_axios.get(
    //     `/character/?name=${characterName}&status=${liveStatus}&gender=${gender}`
    //   );
    //   setAlLCharacters(resp.data.results);
    // } catch (error: any) {
    //   console.log(error.message);
    // } finally {
    //   setLoadingGeneral(false);
    // }
  };

  const getAllEpisondes = async () => {
    const resp = await public_axios.get(`/episode?name=${episodeName}`);
    setAllEpisodes(resp.data.results);
  };

  const getAllLocations = async () => {
    const resp = await public_axios.get(`/location?name=${locationName}`);
    setAllLocations(resp.data.results);
  };

  useEffect(() => {
    getAllLocations();
    if (allLocations) {
      getAllLocations();
    }
  }, [locationName]);

  useEffect(() => {
    getAllEpisondes();
    if (allEpisodes) {
      getAllEpisondes();
    }
  }, [episodeName]);

  const getAllCharactersFunction = async (e: any) => {
    if (e.target.key) {
      useEffect(() => {
        if (allCharacters) {
          getAllCharacters();
        }
      }, [liveStatus, gender, characterName]);
    }
    // useEffect(() => {
    //   if (allCharacters) {
    //     getAllCharacters(characterName);
    //   }
    // }, [liveStatus, gender, characterName]);
  };
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
        getAllCharactersFunction,
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
        allEpisodes,
        setEpisodeName,
        episodeName,
        setLocationName,
        locationName,
        allLocations,
        setServerDownStatus,
        serverDownStatus,
        setDarkModeStatus,
        darkModeStatus,
        searchedCharacters,
      }}
    >
      {children}
    </GLobalContext.Provider>
  );
};
