import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  payloadLogo,
  AiOutlineMenu,
  RiHomeFill,
  FaPlane,
  MdOutlinePlace,
  BiUser,
} from "../../../imports/assets";

export const Sidebar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "", { path: "/" });
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-brand-100/70 ">
      <div className="mt-20 space-y-7">
        <div className="flex items-center justify-center gap-2">
          <RiHomeFill className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-lg font-bold text-gray-800 hover:text-brand-300 md:block"
            to="/contractorhome"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2">
          <FaPlane className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-lg font-bold text-gray-800 hover:text-brand-300 md:block"
            to=""
          >
            Flights
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2">
          <MdOutlinePlace className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-lg font-bold text-gray-800 hover:text-brand-300 md:block"
            to=""
          >
            Destinations
          </Link>
        </div>
      </div>

      <di className="mb-20 flex flex-col items-center space-y-7">
        <div className="flex items-center justify-center gap-2">
          <BiUser className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-lg font-bold text-gray-800 hover:text-brand-300 md:block"
            to=""
          >
            Account
          </Link>
        </div>

        <button
          className="inline-block rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
          onClick={logout}
        >
          Log out
        </button>
      </di>
    </div>
  );
};
