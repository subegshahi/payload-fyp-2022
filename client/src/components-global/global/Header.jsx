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
} from "../../imports/assets";

export const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "", { path: "/" });
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <header>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-end gap-5 px-5">
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

            <Link className="font-medium text-white hover:text-brand-300" to="">
              Airlines
            </Link>
          </div>

          {/* <div className="flex items-center justify-center gap-2">
            <MdOutlinePlace className="inline-block text-white" size={"25"} />

            <Link className="font-medium text-white hover:text-brand-300" to="">
              Destinations
            </Link>
          </div> */}

          <div className="flex items-center justify-center gap-2">
            <BiUser className="inline-block text-white" size={"25"} />

            <Link
              className="font-medium text-white hover:text-brand-300"
              to="/contractorhome"
            >
              Contractor
            </Link>
          </div>
        </nav>

        <div className="hidden flex-1 items-center justify-end space-x-5 md:flex">
          {/* <div className="flex items-center justify-center gap-2">
            <BiUser className="inline-block text-white" size={"25"} />

            <Link className="font-medium text-white hover:text-brand-300" to="">
              My Account
            </Link>
          </div> */}

          {!cookies.access_token ? (
            <>
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
            </>
          ) : (
            <button
              className="inline-block rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
              onClick={logout}
            >
              Log out
            </button>
          )}
        </div>

        <button className="inline-block text-white hover:text-brand-300 md:hidden">
          <AiOutlineMenu size={"25"} />
        </button>
      </div>
    </header>
  );
};
