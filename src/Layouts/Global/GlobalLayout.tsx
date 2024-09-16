import React from "react";
import { Outlet } from "react-router-dom";
import { Navigations } from "../../Components/Navigations/Navigations";

export const GlobalLayout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navigations />
      </div>
      <Outlet />
    </div>
  );
};
