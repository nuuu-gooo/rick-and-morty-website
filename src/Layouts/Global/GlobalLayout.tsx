import { Outlet } from "react-router-dom";
import { Navigations } from "../../Components/Navigations/Navigations";
import { Footers } from "../../Components/Footers/Footers";

export const GlobalLayout = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <Navigations />
      </div>
      <Outlet />
      <Footers />
    </div>
  );
};
