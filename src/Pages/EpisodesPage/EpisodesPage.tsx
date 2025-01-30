import { useContext } from "react";
import EpisodesSVG from "../../assets/SVGS/episodes-rick-and-morty.svg";
import { GLobalContext } from "../../Providers/Global/GlobalContext";

import { SingleEpisodeComp } from "./SingleEpisodeComp/SingleEpisodeComp";

export const EpisodesPage = () => {
  const { allEpisodes } = useContext(GLobalContext);
  const { setEpisodeName } = useContext(GLobalContext);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-3 flex justify-center items-center flex-col">
        <img
          className="flex   items-center  justify-center w-[50%]"
          src={EpisodesSVG}
          alt=""
        />
        <div className="selectors mt-3 w-full flex items-center">
          <input
            onChange={(e) => {
              setEpisodeName(e.target.value);
            }}
            className="p-4  outline-none border   rounded-md mr-3 w-full"
            placeholder="Filter by Episode"
            type="text"
          />
        </div>
        <div className="characters mt-[10%] ">
          <div className="place-items-center">
            <div className="grid grid-cols-3 gap-3            ">
              {allEpisodes.map((epsiode) => {
                return (
                  <SingleEpisodeComp key={epsiode.id} singleEpisode={epsiode} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
