import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/export";
import { FormInput } from "../components/FormInput";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="relative bg-emerald-600 h-72 w-full">
          <div className="max-w-7xl mx-auto px-5 py-5">
            <p className="text-2xl font-bold text-white">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="absolute top-56 left-6 max-w-7xl mx-auto px-5 py-5 ">
          <form className="mt-10  bg-white rounded-md shadow-md p-5">
            <div className="grid grid-cols-2">
              <div className="space-x-2">
                <input type="radio" />
                <label>Round Trip</label>
              </div>

              <div className="space-x-2">
                <input type="radio" />
                <label>One Way</label>
              </div>
            </div>

            <FormInput
              label={"From"}
              type={"text"}
              placeholder={"Nepalgunj (KEP)"}
            />

            <FormInput label={"To"} type={"text"} placeholder={"Rara (RARA)"} />

            <div className="grid grid-cols-2 gap-5">
              <FormInput label={"Departure"} type={"date"} />

              <FormInput label={"Return"} type={"date"} />
            </div>

            <Link
              className="inline-block text-white font-medium bg-emerald-700 px-4 py-3 rounded-md mt-5 w-full text-center hover:bg-emerald-600"
              to="/"
            >
              Search Flight
            </Link>

            {/* <div className="flex flex-col mt-5">
              <label className="font-medium text-base text-gray-600" htmlFor="">
                From
              </label>

              <input
                className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                type="text"
                name=""
                id=""
              />
            </div> */}
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};
