import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { public_axios } from "../../../utils/API/publicAxios";
import { FaArrowRight } from "react-icons/fa6";
import { rickAndMortyCharacters } from "../../../utils/Data/Data";
import Card from "antd/es/card/Card";

export const DynamicLocation = () => {
  const { singleLocationId } = useParams();
  const [singleLocationData, setSingleLocationData] = useState<string | any>(
    ""
  );
  const navigate = useNavigate();
  const getDynamicLocation = async (id: string) => {
    const resp = await public_axios.get(`/location/${id}`);
    setSingleLocationData(resp.data);
  };

  useEffect(() => {
    //@ts-ignore
    getDynamicLocation(singleLocationId);
  }, [singleLocationId]);
  console.log("single location data:", singleLocationData);
  const randomCharacterNumber = Math.floor(
    Math.random() * rickAndMortyCharacters.length
  );
  return (
    <div>
      <div className="inner-container flex justify-center items-center h-[90vh] flex-col">
        <h1>{singleLocationData.name}</h1>
        <h3 className="mt-3">Cast:</h3>
        <button
          onClick={() => navigate("/allLocationsPage")}
          className="back inline-flex mt-3 items-center mb-3 bg-[black] p-3 border-none text-white rounded-md font-bold"
        >
          <FaArrowRight className="  rotate-180 mr-2" />
          Go Back
        </button>
        <div className=" grid grid-cols-3 pb-3  gap-3">
          {rickAndMortyCharacters[randomCharacterNumber].characterArr.map(
            (character) => {
              return (
                <Card
                  onClick={() =>
                    navigate(`/singleCharacter/${character.filterName}`)
                  }
                  className="shadow-md border-[#82FE66] border-solid shadow-black hover:shadow-md  hover:shadow-[#82FE66] hover:transition-all cursor-not-allowed hover:scale-[1.02] flex justify-center text-center  items-center p-5  flex-col  no-underline hover:underline "
                  bordered={false}
                  style={{ width: 300 }}
                  cover={<img className="w-full" src={character.img}></img>}
                >
                  <p>{character.name}</p>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
