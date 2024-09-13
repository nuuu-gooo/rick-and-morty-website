import React, { useContext } from "react";
import MainRickMortyPic from "../../assets/rick-and-morty-main-logo.svg";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import { Card } from "antd";

export const Home = () => {
  const { allCharacters } = useContext(GLobalContext);
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="inner-container flex flex-col">
          <img className="w-ful" src={MainRickMortyPic} alt="" />
          <div className="selectors mt-3 w-full flex items-center">
            <input
              className="p-2 outline-none border   rounded-md mr-3 w-full"
              placeholder="Filter by Name"
              type="text"
            />
            <select className="p-2 rounded-md outline-none w-full mr-3"></select>
            <select className="p-2 rounded-md outline-none w-full mr-3"></select>
            <select className="p-2 rounded-md outline-none w-full mr-3"></select>
          </div>
          <div className="characters mt-[10%] ">
            <div className="grid grid-cols-3 gap-3   ">
              {allCharacters.map((character) => {
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
      </div>
    </div>
  );
};
