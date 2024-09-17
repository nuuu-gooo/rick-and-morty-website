import React, { useContext, useState } from "react";
import MainRickMortyPic from "../../assets/SVGS/rick-and-morty-main-logo.svg";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import { PaginationComp } from "../../Components/Pagination/PaginationComp";
import { UserComp } from "../../Components/UserComp/UserComp";
import { gendersArr, liveStatusArr } from "../../utils/Data/Data";

export const Home = () => {
  const {
    allCharacters,
    setCharacterName,
    setLiveStatus,
    setGenderStatus,
    resetAllSelectors,
  } = useContext(GLobalContext);
  const [charactersPerPage, setCharactersPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const lastItemIndex = currentPage * charactersPerPage;
  const startIndex = lastItemIndex - charactersPerPage;
  const currentItems = allCharacters.slice(startIndex, lastItemIndex);

  const moveToTop = () => {
    window.scroll({
      top: 100,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="inner-container flex flex-col justify-center items-center">
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
              {liveStatusArr.map((status) => {
                return <option value={status.name}>{status.name}</option>;
              })}
            </select>
            <select
              onChange={(e) => setGenderStatus(e.target.value)}
              className="p-2 rounded-md outline-none w-full mr-3 cursor-pointer"
            >
              {gendersArr.map((gender) => {
                return <option value={gender.name}>{gender.name}</option>;
              })}
            </select>
            <button
              onClick={resetAllSelectors}
              className="w-full p-2  rounded-md bg-transparent border  cursor-pointer hover:shadow-md shadow-black hover:transition-all"
            >
              Reset
            </button>
          </div>
          <div className="characters mt-[10%] ">
            <div className="place-items-center">
              <div className="grid grid-cols-3 gap-3            ">
                {currentItems.map((character) => {
                  return <UserComp character={character} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div onClick={moveToTop} className="mt-[4%]">
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
