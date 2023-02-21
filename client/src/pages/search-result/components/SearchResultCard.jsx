import React from "react";
import { Link } from "react-router-dom";
import { FaPlane } from "../../../assets/imports";

export const SearchResultCard = () => {
  return (
    <div className="rounded-md bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <FaPlane className="text-3xl" />
        <h1 className="text-lg font-medium">Summit Air</h1>
      </div>

      <div className="divide-y-2 divide-dashed divide-gray-400">
        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="text-lg">07:00 AM </div>
            <div className="text-lg text-gray-400">Nepalgunj</div>
          </div>

          {/* <div className="w-1/3 border border-dashed " /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-10 w-10 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>

          <div>
            <div className="text-lg">07:45 AM </div>
            <div className="text-lg text-gray-400">Rara</div>
          </div>
        </div>

        <div className="mt-5 items-center justify-between lg:flex ">
          <div className="pt-5 text-right text-2xl font-bold text-[#114c79]">
            Fare: 15,000
          </div>

          <Link className="btn-form lg:w-1/4" to="/checkout">
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};
