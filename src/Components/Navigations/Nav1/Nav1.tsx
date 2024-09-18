import React from "react";
import MainNavLogo from "../../../assets/SVGS/nav-logo.svg";
import { useNavigate } from "react-router-dom";

export const Nav1 = () => {
  const navigate = useNavigate();

  const hanldeNavigateToEpisodesPage = () => {
    navigate("/allEpisodesPage");
  };

  const hanldeNavigateToLocationsPage = () => {
    navigate("/allLocationsPage");
  };
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div className="w-full  shadow-md">
      <div className="flex justify-center items-center p-3 w-[70%] m-auto  mt-3 rounded-md">
        <nav className="flex justify-between w-full sticky">
          <div
            onClick={handleOnClick}
            className="left hover:underline cursor-pointer"
          >
            <img src={MainNavLogo} alt="" />
          </div>
          <div className="right flex items-center w-[30%] ">
            <button
              onClick={handleOnClick}
              className="w-full mr-3 outline-none p-2 bg-transparent border-none hover:underline cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={hanldeNavigateToLocationsPage}
              className="w-full ml-3 outline-none p-2 bg-transparent border-none hover:underline cursor-pointer"
            >
              Locations
            </button>
            <button
              onClick={hanldeNavigateToEpisodesPage}
              className="w-full ml-3 outline-none p-2 bg-transparent border-none hover:underline cursor-pointer"
            >
              Episodes
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
