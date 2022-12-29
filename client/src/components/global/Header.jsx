import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { payloadLogo } from "../../assets/imports";

export const Header = () => {
  return (
    <header className="border-b-2 border-gray-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <div className="flex-1">
          <img className="w-20" src={payloadLogo} alt="header logo" />
        </div>

        <nav className="hidden space-x-10 md:block ">
          <Link
            className="font-medium text-gray-500 hover:text-gray-900"
            to="/"
          >
            Home
          </Link>

          <Link className="font-medium text-gray-500  hover:text-gray-900">
            Services
          </Link>

          <Link className="font-medium text-gray-500  hover:text-gray-900">
            Contact
          </Link>

          <Link className="font-medium text-gray-500  hover:text-gray-900">
            About
          </Link>
        </nav>

        <div className="hidden flex-1 items-center justify-end space-x-5 md:flex">
          <Link
            className="inline-block font-medium text-gray-500 hover:text-gray-900"
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
          className="inline-block hover:text-gray-600 md:hidden"
          size={"25"}
        />
      </div>
    </header>
  );
};
