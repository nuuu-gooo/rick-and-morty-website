import React, { useContext, useState } from "react";
import MainRickMortyPic from "../../assets/rick-and-morty-main-logo.svg";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import { Card } from "antd";
import { PaginationComp } from "../../Components/Pagination/PaginationComp";

export const Home = () => {
  const {
    allCharacters,
    setCharacterName,
    characterName,
    liveStatus,
    setLiveStatus,
    setGenderStatus,
    gender,
  } = useContext(GLobalContext);
  const [charactersPerPage, setCharactersPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);

  console.log(gender, liveStatus, characterName);

  const lastItemIndex = currentPage * charactersPerPage;
  const startIndex = lastItemIndex - charactersPerPage;
  const currentItems = allCharacters.slice(startIndex, lastItemIndex);

  const resetAllSelectors = () => {
    setLiveStatus("");
    setGenderStatus("");
    setCharacterName("");
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="inner-container flex flex-col">
          <div className="flex justify-center items-center">
            <img className="w-80%]" src={MainRickMortyPic} alt="" />
          </div>
          <div className="selectors mt-3 w-full flex items-center">
            <input
              onChange={(e) => setCharacterName(e.target.value)}
              className="p-2 outline-none border   rounded-md mr-3 w-full"
              placeholder="Filter by Name"
              type="text"
            />
            <select
              onChange={(e) => setLiveStatus(e.target.value)}
              className="p-2 rounded-md outline-none w-full mr-3 cursor-pointer"
            >
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unkknown</option>
            </select>
            <select
              onChange={(e) => setGenderStatus(e.target.value)}
              className="p-2 rounded-md outline-none w-full mr-3 cursor-pointer"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="unknown">Unkknown</option>
            </select>
            <button
              onClick={resetAllSelectors}
              className="w-full p-2  rounded-md bg-transparent border  cursor-pointer hover:shadow-md shadow-black hover:transition-all"
            >
              Reset
            </button>
          </div>
          <div className="characters mt-[10%] ">
            <div className="grid grid-cols-3 gap-3   ">
              {currentItems.map((character) => {
                return (
                  <Card
                    className="shadow-md shadow-black"
                    cover={<img src={character.image}></img>}
                    bordered={false}
                    style={{ width: 300 }}
                  >
                    <h3>{character.name}</h3>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-[4%]">
          <PaginationComp
            onChange={setCurrentPage}
            pageSize={charactersPerPage}
            allCharactersLength={allCharacters.length}
          />
        </div>
      </div>
    </div>
  );
};
