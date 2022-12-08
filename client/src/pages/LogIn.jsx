import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/export";
import {
  plane,
  google,
  aircraft,
  flyingAircraft,
  payloadLogo,
} from "../assets/export";
import { RxCrossCircled } from "react-icons/rx";

export const LogIn = () => {
  return (
    <div>
      {/* <Header /> */}

      <section>
        <div className="bg-gray-50 lg:flex">
          <img
            className="hidden lg:inline-block w-1/2 h-screen"
            src={flyingAircraft}
            alt=""
          />

          <div className="px-5 flex flex-col justify-center h-screen lg:w-1/2 lg:flex lg:items-center">
            <div className="lg:w-1/2 lg:-ml-[180px]">
              <img
                className="w-full h-60 lg:hidden"
                src={plane}
                alt="plane image"
              />

              <div>
                <h1 className="font-medium text-4xl">Welcome back</h1>
                <h2 className="text-lg mt-2 text-gray-500">
                  Please enter your details.
                </h2>
              </div>

              <div className="flex flex-col mt-10">
                <label className="font-medium" htmlFor="">
                  Email
                </label>

                <input
                  className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                  type="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-medium" htmlFor="">
                  Password
                </label>

                <input
                  className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                  type="Password"
                  placeholder="Enter password"
                />
              </div>

              <p className="mt-2 text-right text-emerald-700 font-medium">
                Forget password
              </p>

              <Link
                className="block text-white font-medium bg-emerald-700 px-4 py-3 rounded-md text-center hover:bg-emerald-600 mt-5"
                to=""
              >
                Sign in
              </Link>

              <Link
                className="block font-medium border border-gray-300 px-4 py-2 rounded-md text-center mt-5 "
                to=""
              >
                <img className="inline-block w-8 " src={google} alt="" />
                <span className="inline-block ml-2">Sign in with Google</span>
              </Link>

              <p className="text-gray-500 mt-5 text-center">
                Don't have account?
                <Link className="text-emerald-700 font-medium" to="/signup">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
