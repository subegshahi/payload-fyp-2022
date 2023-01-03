import React from "react";
import { Link } from "react-router-dom";
import {
  payloadLogo,
  AiOutlineMenu,
  RiHomeFill,
  FaPlane,
  MdOutlinePlace,
} from "../../assets/imports";

export const Header = () => {
  return (
    <header>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-5">
        <div className="">
          {/* <h1 className="text-2xl font-semibold text-white">Payload</h1> */}
          {/* <img className="w-20" src={payloadLogo} alt="header logo" /> */}
        </div>

        <nav className="hidden space-x-10 md:flex ">
          <div className="flex items-center justify-center gap-2">
            <RiHomeFill className="inline-block text-white" size={"25"} />

            <Link
              className="font-medium text-white hover:text-brand-300"
              to="/"
            >
              Home
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaPlane className="inline-block text-white" size={"25"} />

            <Link
              className="font-medium text-white hover:text-brand-300"
              to="/"
            >
              Flight
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MdOutlinePlace className="inline-block text-white" size={"25"} />

            <Link
              className="font-medium text-white hover:text-brand-300"
              to="/"
            >
              Destinations
            </Link>
          </div>
        </nav>

        <div className="hidden flex-1 items-center justify-end space-x-5 md:flex">
          <Link
            className="inline-block font-medium text-white hover:text-brand-300"
            to="/login"
          >
            Log in
          </Link>

          <Link
            className="inline-block rounded-md bg-brand-500 px-4 py-2 font-medium text-white hover:bg-brand-400"
            to="/signup"
          >
            Sign up
          </Link>
        </div>

        <AiOutlineMenu
          className="inline-block text-white hover:text-black md:hidden"
          size={"25"}
        />
      </div>
    </header>
  );
};
