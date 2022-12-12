import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/export";
import { RxCrossCircled } from "react-icons/rx";
import {
  google,
  maleUser,
  plane,
  aircraft,
  flyingAircraft,
} from "../assets/export";

export const SignUp = () => {
  return (
    <>
      {/* <Header /> */}

      <section className="bg-gray-50 h-screen">
        <div className=" lg:flex">
          {/* <Link
            className="absolute right-28 top-5 font-medium lg:right-64"
            to="/"
          >
            <RxCrossCircled className="inline-block" size={50} />
          </Link> */}

          <img
            className="hidden lg:inline-block w-1/2 h-screen"
            src={aircraft}
            alt=""
          />

          <div className="px-5 flex flex-col justify-center py-10 lg:w-1/2 lg:flex lg:items-center">
            <div className="lg:w-1/2 lg:-ml-[180px]">
              <div>
                <h1 className="font-medium text-4xl">Create your account</h1>

                <h2 className="text-lg mt-2 text-gray-500">
                  Enter the fields below to get started.
                </h2>
              </div>

              <div className="flex flex-col mt-10">
                <label className="font-medium" htmlFor="">
                  First Name
                </label>

                <input
                  className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                  type="text"
                  placeholder="Enter first name"
                />
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-medium" htmlFor="">
                  Last Name
                </label>

                <input
                  className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                  type="text"
                  placeholder="Enter last name"
                />
              </div>

              <div className="flex flex-col mt-5">
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
                  placeholder="Create password"
                />
              </div>

              <div className="flex flex-col mt-5">
                <label className="font-medium" htmlFor="">
                  Confirm Password
                </label>

                <input
                  className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                  type="Password"
                  placeholder="Re-enter password"
                />
              </div>

              <Link
                className="block text-white font-medium bg-emerald-700 px-4 py-3 rounded-md text-center hover:bg-emerald-600 mt-5"
                to=""
              >
                Sign up
              </Link>

              <Link
                className="block font-medium border border-gray-300 px-4 py-2 rounded-md text-center mt-5 "
                to=""
              >
                <img className="inline-block w-8 " src={google} alt="" />
                <span className="inline-block ml-2">Sign in with Google</span>
              </Link>

              <p className="text-gray-500 mt-5 text-center">
                Already have an account?
                <Link className="text-emerald-700 font-medium" to="/login">
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
