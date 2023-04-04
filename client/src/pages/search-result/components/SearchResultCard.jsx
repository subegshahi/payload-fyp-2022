import React from "react";
import { Link } from "react-router-dom";
import { FaPlane } from "../../../imports/assets";

export const SearchResultCard = ({
  airlinesName,
  date,
  from,
  to,
  takeoffTime,
  landingTime,
  fare,
}) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-2">
        <div>
          <FaPlane className="text-3xl" />
          <h1 className="text-lg font-medium">{airlinesName}</h1>
        </div>

        <h2 className="text-lg font-medium text-gray-500">Date: {date}</h2>
      </div>

      <div className="divide-y-2 divide-dashed divide-gray-400">
        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold ">{takeoffTime}</div>
            <div className="text-lg text-gray-400">{from}</div>
          </div>

          {/* <div className="w-1/3 border border-dashed " /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.6}
            stroke="currentColor"
            className="h-24 w-24 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>

          <div>
            <div className="text-lg font-semibold">{landingTime}</div>
            <div className="text-lg text-gray-400">{to}</div>
          </div>
        </div>

        <div className="mt-5 items-center justify-between lg:flex ">
          <div className="pt-5 text-right text-2xl font-bold text-[#114c79]">Fare: {fare}</div>

          <Link className="btn-form mt-5 lg:w-1/4" to="/checkout">
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};
