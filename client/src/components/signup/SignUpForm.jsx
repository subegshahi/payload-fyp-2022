import React from "react";
import { Link } from "react-router-dom";
import { google } from "../../assets/imports";

export const SignUpForm = () => {
  return (
    <form className="w-full px-5 lg:w-1/2">
      <div>
        <h1 className="mt-10 text-4xl font-medium">Create your account</h1>

        <h2 className="mt-2 text-lg text-gray-500">
          Enter the fields below to get started.
        </h2>
      </div>

      <div className="mt-10 flex flex-col">
        <label className="font-medium" htmlFor="">
          First Name
        </label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="text"
          placeholder="Enter first name"
        />
      </div>

      <div className="mt-5 flex flex-col">
        <label className="font-medium" htmlFor="">
          Last Name
        </label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="text"
          placeholder="Enter last name"
        />
      </div>

      <div className="mt-5 flex flex-col">
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
          placeholder="Create password"
        />
      </div>

      <div className="mt-5 flex flex-col">
        <label className="font-medium" htmlFor="">
          Confirm Password
        </label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="Password"
          placeholder="Re-enter password"
        />
      </div>

      <Link
        className="mt-5 block rounded-md bg-brand-500 px-4 py-3 text-center font-medium text-white hover:bg-brand-400"
        to=""
      >
        Sign up
      </Link>

      <Link
        className="mt-5 block rounded-md border border-gray-300 px-4 py-2 text-center font-medium "
        to=""
      >
        <img className="inline-block w-8 " src={google} alt="" />
        <span className="ml-2 inline-block">Continue with Google</span>
      </Link>

      <p className="mt-5 text-center text-gray-500">
        Already have an account?
        <Link className="font-medium text-brand-500" to="/login">
          {" "}
          Log in
        </Link>
      </p>
    </form>
  );
};
