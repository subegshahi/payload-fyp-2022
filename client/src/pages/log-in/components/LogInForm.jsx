import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { google } from "../../../imports/assets";

export const LogInForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="w-full px-5 lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="mt-10 text-4xl font-medium">Welcome back</h1>

        <h2 className="mt-2 text-lg text-gray-500">
          Please enter your details.
        </h2>
      </div>

      <div className="mt-10 flex flex-col">
        <label className="font-medium">Email</label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="email"
          placeholder="Enter email"
          {...register("email")}
        />

        <p className="text-red-600">{errors.email?.message}</p>
      </div>

      <div className="mt-5 flex flex-col">
        <label className="font-medium">Password</label>

        <input
          className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          type="password"
          placeholder="Enter password"
          {...register("password")}
        />

        <p className="text-red-600">{errors.password?.message}</p>
      </div>

      <p className="mt-2 text-right font-medium text-brand-500">
        Forgot password
      </p>

      <button className="mt-5 block w-full rounded-md bg-brand-500 px-4 py-3 text-center font-medium text-white hover:bg-brand-400">
        Log in
      </button>

      {/* <button className="mt-5 block w-full rounded-md border border-gray-300 px-4 py-2 text-center font-medium ">
        <img className="inline-block w-8 " src={google} alt="" />
        <span className="ml-2 inline-block">Continue with Google</span>
      </button> */}

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
