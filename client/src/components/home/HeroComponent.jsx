import React from "react";
import { boardingPass, document } from "../../assets/imports";

export const HeroComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <p className="mt-5 text-4xl font-bold text-white">
          Deserunt, voluptatibus quisquam esse explicabo consectetur
        </p>
      </div>

      <img
        className="hidden h-[400px] w-1/2 lg:inline-block"
        src={document}
        alt=""
      />
    </>
  );
};
