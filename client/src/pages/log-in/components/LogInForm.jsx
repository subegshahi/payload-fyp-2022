import React from "react";
import { Link } from "react-router-dom";
import { google } from "../../../assets/imports";

export const LogInForm = () => {
  return (
    <form className="w-full px-5 lg:w-1/2">
      <div>
        <h1 className="mt-10 text-4xl font-medium">Welcome back</h1>
        <h2 className="mt-2 text-lg text-gray-500">
          Please enter your details.
        </h2>
      </div>

      <div className="mt-10 flex flex-col">
        <label className="font-medium" htmlFor="">
          Email
        </label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="email"
          placeholder="Enter email"
        />
      </div>

      <div className="mt-5 flex flex-col">
        <label className="font-medium" htmlFor="">
          Password
        </label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="Password"
          placeholder="Enter password"
        />
      </div>

      <p className="mt-2 text-right font-medium text-brand-500">
        Forgot password
      </p>

      <button className="mt-5 block w-full rounded-md bg-brand-500 px-4 py-3 text-center font-medium text-white hover:bg-brand-400">
        Log in
      </button>

      <button className="mt-5 block w-full rounded-md border border-gray-300 px-4 py-2 text-center font-medium ">
        <img className="inline-block w-8 " src={google} alt="" />
        <span className="ml-2 inline-block">Continue with Google</span>
      </button>

      <p className="mt-5 text-center text-gray-500">
        Don't have account?
        <Link className="font-medium text-brand-500" to="/signup">
          {" "}
          Sign up
        </Link>
      </p>
    </form>
  );
};
