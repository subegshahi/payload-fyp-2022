import React from "react";
import { FaPlane } from "../../../imports/assets";

export const SearchResultHeader = () => {
  return (
    <div className="flex items-center justify-between bg-[#114c79]  text-white ">
      <div>
        <h1 className="font-medium text-[#79a9cf]">Nepalgunj</h1>
        <h2 className="mt-2 text-5xl">KEP</h2>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-5">
        <div className="font-medium text-[#79a9cf]">Dec 19, 2022</div>
        <div className="relative w-1/2 border border-dashed " />
        <FaPlane className="absolute top-[14.4rem] " size="2rem" />
      </div>

      <div className="bg-[#114c79] text-white">
        <h1 className="font-medium text-[#79a9cf]">Rara</h1>
        <h2 className="mt-2 text-5xl">RARA</h2>
      </div>
    </div>
  );
};
