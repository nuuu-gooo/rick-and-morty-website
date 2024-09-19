import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { public_axios } from "../../../utils/API/publicAxios";
import { Card } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { rickAndMortyCharacters } from "../../../utils/Data/Data";

export const DynamicEpisode = () => {
  const [dynamicEpisode, setDynamicEpisode] = useState([]);
  const { episodeId } = useParams();
  const navigate = useNavigate();
  const fetchDynamicEpsiode = async (id: string) => {
    const resp = await public_axios.get(`/episode/${id}`);
    setDynamicEpisode(resp.data);
    console.log(dynamicEpisode);
  };

  useEffect(() => {
    // @ts-ignore
    fetchDynamicEpsiode(episodeId);
    console.log(dynamicEpisode);
  }, [episodeId]);
  let randomCharacterNumber = Math.floor(
    Math.random() * rickAndMortyCharacters.length
  );

  return (
    <div className="flex justify-center items-center flex-col mt-[3%]">
      <div className="title flex justify-between items-center items-center">
        <h1>{dynamicEpisode?.name}</h1>
      </div>
      <div className="characters mt-[3%] ">
        <div className="place-items-center">
          <button
            onClick={() => navigate("/allEpisodesPage")}
            className="back inline-flex items-center mb-3 bg-[black] p-3 border-none text-white rounded-md"
          >
            <FaArrowRight className="  rotate-180 mr-2" />
            <h3 className="hover:underline  cursor-pointer ">Go Back</h3>
          </button>
          <div className="info flex items-center justify-between ">
            <div className="episode flex-col flex items-start mb-[3%]">
              <h3>Episode</h3>
              <p className="mt-2">{dynamicEpisode.episode}</p>
            </div>
            <div className="episode-date flex-col flex items-start mb-[3%]">
              <h3>Date</h3>
              <p className="mt-2">{dynamicEpisode.air_date}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {rickAndMortyCharacters[randomCharacterNumber].characterArr.map(
              (character) => {
                return (
                  // <Link className="no-underline hover:underline">
                  <Card
                    className="shadow-md border-[#82FE66] border-solid shadow-black hover:shadow-md  hover:shadow-[#82FE66] hover:transition-all cursor-not-allowed hover:scale-[1.02] flex justify-center text-center  items-center p-5  flex-col  no-underline hover:underline "
                    bordered={false}
                    style={{ width: 300 }}
                    cover={<img className="w-full" src={character.img}></img>}
                  >
                    <p>{character.name}</p>
                  </Card>
                  // </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
