import React, { useContext } from "react";
import { GLobalContext } from "../../../Providers/Global/GlobalContext";

export const Footeer1 = () => {
  const { darkModeStatus } = useContext(GLobalContext);
  return (
    <div className="h-full flex ">
      <footer
        className={`flex justify-center items-center   w-full shadow-md shadow-black p-3   ${
          darkModeStatus && "bg-black text-white"
        }`}
      >
        <h3>Made with love in 🇨🇭 / All rights reserved </h3>
      </footer>
    </div>
  );
};
