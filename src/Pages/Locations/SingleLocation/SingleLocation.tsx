import { Card } from "antd";
import { useNavigate } from "react-router-dom";

//@ts-ignore
export const SingleLocationComp = ({ singleLocation }): any => {
  const navigate = useNavigate();
  // console.log(singleLocation);

  return (
    <Card
      onClick={() => navigate(`/allLocations/${singleLocation.id}`)}
      key={singleLocation.id}
      className="shadow-md border-[#82FE66] border-solid shadow-black hover:shadow-md  hover:shadow-[#82FE66] hover:transition-all cursor-pointer hover:scale-[1.02] flex justify-center text-center  items-center p-5   "
      bordered={false}
      style={{ width: 300 }}
    >
      <h3 className="text-black">{singleLocation.name}</h3>
      <p className="text-[black]">{singleLocation.type}</p>
    </Card>
  );
};
