import React from "react";
import { Link } from "react-router-dom";

export const BookingForm = () => {
  return (
    <form className="rounded-md bg-white p-5 shadow-sm">
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

      <div className="gap-5 lg:flex [&>*]:basis-full">
        <div className="gap-5 lg:flex [&>*]:basis-full">
          <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              From
            </label>

            <input
              className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              type="text"
              placeholder="Nepalgunj (KEP)"
              name=""
              id=""
            />
          </div>

          <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              To
            </label>

            <input
              className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-400"
              type="text"
              placeholder="RARA (RARA)"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              Departure
            </label>

            <input
              className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-400"
              type="date"
              name=""
              id=""
            />
          </div>

          <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              Return
            </label>

            <input
              className="mt-2 rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-400"
              type="date"
              name=""
              id=""
            />
          </div>
        </div>
      </div>

      <div className="items-center justify-center gap-5 lg:flex [&>*]:basis-full">
        <div className="mt-5 lg:w-1/2">
          <label className="text-base font-medium text-gray-600 " htmlFor="">
            Travellers
          </label>

          <div className="mt-2 grid grid-cols-2 gap-5">
            <div className="flex items-center gap-2 [&>*]:basis-full">
              <button className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500">
                +
              </button>

              <p className=" text-center text-gray-600">1 Adult</p>

              <button className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500">
                -
              </button>
            </div>

            <div className="flex items-center gap-2 [&>*]:basis-full">
              <button className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500">
                +
              </button>

              <p className=" text-center text-gray-600">1 Child</p>

              <button className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500">
                -
              </button>
            </div>
          </div>
        </div>

        <Link
          className="mt-5 inline-block w-full rounded-md bg-brand-500 px-4 py-3 text-center font-medium text-white hover:bg-brand-400   lg:mt-12"
          to="/"
        >
          Search Flight
        </Link>
      </div>
    </form>
  );
};
