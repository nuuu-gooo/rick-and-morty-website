import React, { useContext, useState, useTransition } from "react";
import MainRickMortyPic from "../../assets/SVGS/rick-and-morty-main-logo.svg";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import { PaginationComp } from "../../Components/Pagination/PaginationComp";
import { UserComp } from "../../Components/UserComp/UserComp";
import { IoFilterSharp } from "react-icons/io5";
import { gendersArr, liveStatusArr } from "../../utils/Data/Data";
import { TSingleUser } from "../../utils/@types/@types";
import { Modal, Button } from "antd";

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
  const [selectorModalStatus, setSelectorModalStatus] =
    useState<boolean>(false);

  const closeModal = () => {
    setSelectorModalStatus(false);
  };

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
          <div className=" hidden   selectors md:mt-3 w-full md:flex items-center">
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
          <button
            onClick={() => setSelectorModalStatus(true)}
            className="md:hidden  w-[50%]   rounded-md mt-3 p-2   bg-transparent hover:cursor-pointer outline-none bg-[#82FE66] border-none"
          >
            <IoFilterSharp className="text-2xl" />
          </button>
          <Modal onCancel={closeModal} open={selectorModalStatus}>
            <input
              onChange={(e) => setCharacterName(e.target.value)}
              className="p-2 outline-none border   rounded-md mr-3 w-full"
              placeholder="Filter by Name"
              type="text"
            />
            <select
              onChange={(e) => setLiveStatus(e.target.value)}
              className="p-2 rounded-md outline-none w-full mr-3 cursor-pointer mt-3"
            >
              {liveStatusArr.map((status) => {
                return <option value={status.name}>{status.name}</option>;
              })}
            </select>
            <select
              onChange={(e) => setGenderStatus(e.target.value)}
              className="p-2 rounded-md outline-none w-full mr-3 cursor-pointer mt-3"
            >
              {gendersArr.map((gender) => {
                return <option value={gender.name}>{gender.name}</option>;
              })}
            </select>
            <Button
              danger={true}
              onClick={resetAllSelectors}
              className="w-full p-2  rounded-md bg-transparent border  cursor-pointer hover:shadow-md shadow-black hover:transition-all mt-3 "
            >
              Reset
            </Button>
          </Modal>
          <div className="characters mt-[10%] ">
            <div className="place-items-center">
              <div className="grid xl:grid-cols-3 gap-3            ">
                {currentItems.map((character: TSingleUser) => {
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
