import React from "react";
import { Link } from "react-router-dom";

export const BookingForm = () => {
  return (
    <form>
      <div className="bg-white rounded-md shadow-md p-5">
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

        <div className="flex flex-col mt-5">
          <label className="font-medium text-base text-gray-600" htmlFor="">
            From
          </label>

          <input
            className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
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
            className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
            type="text"
            placeholder="RARA (RARA)"
            name=""
            id=""
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col mt-5">
            <label className="font-medium text-base text-gray-600" htmlFor="">
              Departure
            </label>

            <input
              className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
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
              className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
              type="date"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="font-medium text-base text-gray-600 " htmlFor="">
            Travellers
          </label>

          <div className="grid grid-cols-2  mt-2">
            <div className="flex gap-2 items-center">
              <button className="bg-emerald-200 text-emerald-900 font-bold text-lg rounded-md w-1/4 inline-block">
                +
              </button>

              <p className=" text-gray-600">1 Adult</p>

              <button className="bg-emerald-200 text-emerald-900 font-bold text-lg rounded-md w-1/4 inline-block">
                -
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <button className="bg-emerald-200 text-emerald-900 font-bold text-lg rounded-md w-1/4 inline-block">
                +
              </button>

              <p className=" text-gray-600">1 Child</p>

              <button className="bg-emerald-200 text-emerald-900 font-bold text-lg rounded-md w-1/4 inline-block">
                -
              </button>
            </div>
          </div>
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
      </div>
    </form>
  );
};
