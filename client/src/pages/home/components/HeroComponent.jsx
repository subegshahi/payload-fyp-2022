import React from "react";
import { Link } from "react-router-dom";
import { boardingPass, document } from "../../../imports/assets";

export const HeroComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-10">
      <img
        className="h-[23rem] lg:order-2 lg:h-[26rem] lg:w-1/2"
        src={document}
        alt=""
      />

      <div>
        <p className="mt-5 text-4xl font-bold text-white md:text-5xl">
          Deserunt, voluptatibus quisquam
        </p>

        <p className="font-base mt-5 text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          suscipit.
        </p>

        <Link
          className="mt-10 inline-block w-full rounded-md bg-brand-500 px-4 py-3 text-center font-medium text-white hover:bg-brand-400 lg:w-1/2"
          to="/login"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};
