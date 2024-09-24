import React, { useContext } from "react";
import { Card } from "antd";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { TSingleUser } from "../../utils/@types/@types";

//@ts-ignore
export const UserComp = ({ character }: any) => {
  const navigate = useNavigate();
  const { loadingGeneral } = useContext(GLobalContext);
  const handleOnClick = (id: string) => {
    navigate(`/singleCharacter/${id}`);
  };
  //@ts-ignore
  return (
    <div>
      {loadingGeneral && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      <Card
        key={character.id}
        onClick={() => {
          handleOnClick(character.name);
        }}
        className="shadow-md shadow-black hover:shadow-md  hover:shadow-[#82FE66] hover:transition-all cursor-pointer hover:scale-[1.02]"
        cover={<img src={character.image}></img>}
        bordered={false}
        style={{ width: 300 }}
      >
        <h3>{character.name}</h3>
        <p>{character.status}</p>
        <p>{character.species}</p>
      </Card>
    </div>
  );
};
