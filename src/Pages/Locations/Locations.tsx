import React, { useContext } from "react";
import LocationsSVG from "../../assets/SVGS/locations-main-img.svg";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import SingleLocationComp from "./SingleLocation";

export const Locations = () => {
  const { setEpisodeName, allLocations, setLocationName } =
    useContext(GLobalContext);

  console.log(allLocations);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-3 flex justify-center items-center flex-col">
        <img
          className="flex   items-center  justify-center w-[50%]"
          src={LocationsSVG}
          alt=""
        />
        <div className="selectors mt-3 w-full flex items-center">
          <input
            onChange={(e) => {
              setLocationName(e.target.value);
            }}
            className="p-4  outline-none border   rounded-md mr-3 w-full"
            placeholder="Filter by Name"
            type="text"
          />
        </div>
        <div className="characters mt-[10%] ">
          <div className="place-items-center">
            <div className="grid grid-cols-3 gap-3            ">
              {allLocations?.map((location) => {
                return (
                  <SingleLocationComp
                    key={location.id}
                    singleLocation={location}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
