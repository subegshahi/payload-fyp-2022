import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  MdOutlinePlace,
  BiUser,
  HiOutlineLogout,
  BsTicketPerforated,
  BiHomeAlt2,
  FaPlane,
} from "../../../imports/assets";

export const Sidebar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("access_token", { path: "/" });
    navigate("/");
  };

  return (
    <div className="ml-10 flex min-h-screen flex-col justify-between border-r border-gray-300">
      <div className="mt-20 space-y-7">
        <div className="inline-block rounded-xl border bg-brand-400 p-5 text-white">
          <FaPlane size={42} />
        </div>

        <div className="flex gap-3">
          <BiHomeAlt2 className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-base font-semibold text-gray-800 hover:text-brand-300 md:block"
            to="/contractorhome"
          >
            Flight
          </Link>
        </div>

        <div className="flex gap-3">
          <BsTicketPerforated className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-base font-semibold text-gray-800 hover:text-brand-300 md:block"
            to="/uploadedflights"
          >
            Ticket
          </Link>
        </div>

        <div className="flex gap-3">
          <MdOutlinePlace className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-base font-semibold text-gray-800 hover:text-brand-300 md:block"
            to=""
          >
            Destinations
          </Link>
        </div>
      </div>

      <div className="mb-20 space-y-7">
        <div className="flex gap-3">
          <BiUser className="inline-block text-gray-800" size={"25"} />

          <Link
            className="hidden text-base font-semibold text-gray-800 hover:text-brand-300 md:block"
            to=""
          >
            Account
          </Link>
        </div>

        <div className="flex gap-3">
          <HiOutlineLogout className="inline-block text-red-600" size={"25"} />

          <button
            className="hidden text-base font-semibold text-red-600 hover:text-brand-300 md:block"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};
