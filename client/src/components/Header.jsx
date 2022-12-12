import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { payloadLogo } from "../assets/export";

export const Header = () => {
  return (
    <header className="border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-2">
        <div className="flex-1">
          <img className="w-20" src={payloadLogo} alt="header logo" />
        </div>

        <nav className="hidden md:block space-x-10 ">
          <Link
            className="text-gray-500 font-medium hover:text-gray-900"
            to="/"
          >
            Home
          </Link>

          <Link className="text-gray-500 font-medium  hover:text-gray-900">
            Services
          </Link>

          <Link className="text-gray-500 font-medium  hover:text-gray-900">
            Contact
          </Link>

          <Link className="text-gray-500 font-medium  hover:text-gray-900">
            About
          </Link>
        </nav>

        <div className="hidden space-x-5 flex-1 md:flex justify-end items-center">
          <Link
            className="inline-block text-gray-500 font-medium hover:text-gray-900"
            to="/login"
          >
            Sign in
          </Link>

          <Link
            className="inline-block text-white font-medium bg-emerald-700 px-4 py-2 rounded-md hover:bg-emerald-600"
            to="/signup"
          >
            Sign up
          </Link>
        </div>

        <AiOutlineMenu
          className="inline-block md:hidden hover:text-gray-600"
          size={"25"}
        />
      </div>
    </header>
  );
};
