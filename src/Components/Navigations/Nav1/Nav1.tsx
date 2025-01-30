import { useContext } from "react";
import MainNavLogo from "../../../assets/SVGS/nav-logo.svg";
import { useNavigate } from "react-router-dom";
import { GLobalContext } from "../../../Providers/Global/GlobalContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const Nav1 = () => {
  const { setDarkModeStatus, darkModeStatus } = useContext(GLobalContext);
  console.log(darkModeStatus);
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
    <div className={`w-full  shadow-md ${darkModeStatus && "bg-black"} `}>
      <div className="flex justify-center items-center p-3 w-[70%] m-auto   rounded-md">
        <nav className="flex justify-between w-full sticky">
          <div
            onClick={handleOnClick}
            className="left hover:underline cursor-pointer "
          >
            <img src={MainNavLogo} alt="" />
          </div>

          <div className="middle flex items-center   ">
            <button
              onClick={() => setDarkModeStatus(!darkModeStatus)}
              className={`w-full p-2 cursor-pointer bg-transparent border-none ${
                darkModeStatus &&
                "bg-black text-white  border-white   flex items-center  "
              } `}
            >
              {darkModeStatus ? (
                <MdDarkMode className="text-2xl" />
              ) : (
                <MdOutlineDarkMode className="text-2xl" />
              )}
            </button>
          </div>

          <div className="right flex items-center w-[30%] ">
            <button
              onClick={handleOnClick}
              className={`w-full mr-3 outline-none p-2 bg-transparent border-none hover:underline cursor-pointer ${
                darkModeStatus && "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={hanldeNavigateToLocationsPage}
              className={`w-full ml-3 outline-none p-2 bg-transparent border-none hover:underline cursor-pointer ${
                darkModeStatus && "text-white"
              }`}
            >
              Locations
            </button>
            <button
              onClick={hanldeNavigateToEpisodesPage}
              className={`w-full ml-3 outline-none p-2 bg-transparent border-none hover:underline cursor-pointer ${
                darkModeStatus && "text-white"
              }`}
            >
              Episodes
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
