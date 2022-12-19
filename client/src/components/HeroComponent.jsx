import React from "react";
import { boardingPass } from "../assets/imports";

export const HeroComponent = () => {
  return (
    <>
      <div className="lg:w-1/2 flex justify-center items-center">
        <p className="text-4xl font-bold text-white mt-5">
          Deserunt, voluptatibus quisquam esse explicabo consectetur
        </p>
      </div>

      <img
        className="hidden lg:inline-block w-1/2 aspect-video object-cover"
        src={boardingPass}
        alt=""
      />
    </>
  );
};
