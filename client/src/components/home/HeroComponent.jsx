import React from "react";
import { Link } from "react-router-dom";
import { boardingPass, document } from "../../assets/imports";

export const HeroComponent = () => {
  return (
    <section className="flex">
      <div className="flex flex-col justify-center lg:w-1/2">
        <div>
          <p className="mt-5 text-5xl font-bold text-white">
            Deserunt, voluptatibus quisquam
          </p>

          <p className="font-base mt-10 text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            suscipit.
          </p>
        </div>

        <Link
          className="mt-10 inline-block w-1/2 rounded-md bg-brand-500 px-4 py-2 text-center font-medium text-white hover:bg-brand-300"
          to="/signup"
        >
          Sign up now
        </Link>
      </div>

      <img className="hidden h-[400px] w-1/2 lg:block" src={document} alt="" />
    </section>
  );
};
