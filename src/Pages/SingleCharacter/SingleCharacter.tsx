import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { public_axios } from "../../utils/API/publicAxios";
import { FaArrowRight } from "react-icons/fa6";
import { TSingleUser } from "../../utils/@types/@types";

export const SingleCharacter = () => {
  const { singleCharacterId } = useParams();
  const [singleCharacter, setSingleCharacter] = useState<TSingleUser>();
  const navigate = useNavigate();

  const fetchSingleCharacter = async (
    singleCharacterId: string | undefined
  ) => {
    const resp = await public_axios.get(`/character/${singleCharacterId}`);
    setSingleCharacter(resp.data);
  };
  useEffect(() => {
    fetchSingleCharacter(singleCharacterId);
    console.log(singleCharacter);
  }, []);
  return (
    <div className="flex  justify-between  mt-3 ">
      <div
        onClick={() => navigate("/")}
        className="left flex ml-[3%]  items-center "
      >
        <FaArrowRight className="  rotate-180 mr-3" />
        <h3 className="hover:underline  cursor-pointer">Go Back</h3>
      </div>
      <div className="flex flex-col items-center">
        <img
          className="w-[80%] rounded-full"
          src={singleCharacter?.image}
          alt=""
        />

        <h1 className="mt-4">{singleCharacter?.name}</h1>

        <div className="mt-[20%]">
          <h1 className="text-center">Informations</h1>
          <div className="gender flex-col flex items-center justify-center mt-4">
            <h3>Gender</h3>

            <p className="mt-1">{singleCharacter?.gender}</p>
          </div>
          <div className="gender flex-col flex items-center justify-center mt-4">
            <h3>Species</h3>
            <p className="mt-1">{singleCharacter?.species}</p>
          </div>
          <div className="gender flex-col flex items-center justify-center mt-4">
            <h3>Type</h3>
            <p className="mt-1">{singleCharacter?.type}</p>
          </div>
          <div className="gender flex-col flex items-center justify-center mt-4">
            <h3>Origin</h3>
            <p className="mt-1">{singleCharacter?.origin?.name}</p>
          </div>
          <div className="gender flex-col flex items-center justify-center mt-4">
            <h3>Location</h3>
            <p className="mt-1">{singleCharacter?.location?.name}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <p className="invisible">l</p>
      </div>
    </div>
  );
};
