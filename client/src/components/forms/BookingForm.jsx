import React from "react";
import { Link } from "react-router-dom";

export const BookingForm = () => {
  return (
    <form className="bg-white rounded-xl shadow-md p-5">
      <div className="flex gap-10">
        <div className="space-x-2">
          <input type="radio" />
          <label>One Way</label>
        </div>

        <div className="space-x-2">
          <input type="radio" />
          <label>Round Trip</label>
        </div>
      </div>

      <div className="lg:flex gap-5 [&>*]:basis-full">
        <div className="lg:flex gap-5 [&>*]:basis-full">
          <div className="flex flex-col mt-5">
            <label className="font-medium text-base text-gray-600" htmlFor="">
              From
            </label>

            <input
              className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              type="text"
              placeholder="Nepalgunj (KEP)"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-medium text-base text-gray-600" htmlFor="">
              To
            </label>

            <input
              className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-400"
              type="text"
              placeholder="RARA (RARA)"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col mt-5">
            <label className="font-medium text-base text-gray-600" htmlFor="">
              Departure
            </label>

            <input
              className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-400"
              type="date"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-medium text-base text-gray-600" htmlFor="">
              Return
            </label>

            <input
              className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-400"
              type="date"
              name=""
              id=""
            />
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center items-center gap-5 [&>*]:basis-full">
        <div className="mt-5 lg:w-1/2">
          <label className="font-medium text-base text-gray-600 " htmlFor="">
            Travellers
          </label>

          <div className="mt-2 grid grid-cols-2 gap-5">
            <div className="flex gap-2 items-center [&>*]:basis-full">
              <button className="bg-brand-100 text-brand-500 font-bold text-lg rounded-md w-1/4 inline-block">
                +
              </button>

              <p className=" text-gray-600 text-center">1 Adult</p>

              <button className="bg-brand-100 text-brand-500 font-bold text-lg rounded-md w-1/4 inline-block">
                -
              </button>
            </div>

            <div className="flex gap-2 items-center [&>*]:basis-full">
              <button className="bg-brand-100 text-brand-500 font-bold text-lg rounded-md w-1/4 inline-block">
                +
              </button>

              <p className=" text-gray-600 text-center">1 Child</p>

              <button className="bg-brand-100 text-brand-500 font-bold text-lg rounded-md w-1/4 inline-block">
                -
              </button>
            </div>
          </div>
        </div>

        <Link
          className="inline-block text-white font-medium bg-brand-500 px-4 py-3 rounded-md mt-5 w-full text-center lg:mt-12   hover:bg-brand-400"
          to="/"
        >
          Search Flight
        </Link>
      </div>
    </form>
  );
};
