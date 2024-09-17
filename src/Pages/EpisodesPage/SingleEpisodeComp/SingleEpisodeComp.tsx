import React from "react";
import { Card } from "antd";

//@ts-ignore
export const SingleEpisodeComp = ({ singleEpisode }): any => {
  return (
    <Card
      key={singleEpisode.id}
      className="shadow-md border-[#82FE66] border-solid shadow-black hover:shadow-md  hover:shadow-[#82FE66] hover:transition-all cursor-pointer hover:scale-[1.02] flex justify-center text-center  items-center p-5   "
      bordered={false}
      style={{ width: 300 }}
    >
      <h3 className="text-black">{singleEpisode.name}</h3>
      <p className="text-[black]">{singleEpisode.air_date}</p>
      <p>{singleEpisode.episode}</p>
    </Card>
  );
};