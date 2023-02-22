import React from "react";
import { filter } from "../../../assets/imports";

export const SearchResultFilter = () => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10" src={filter} alt="" />
        <h1 className="text-2xl font-semibold">Filter</h1>
      </div>

      <div className="mt-5 flex flex-col">
        <label className="text-xl font-light">Price</label>

        <div className="mt-2">
          <div className="flex justify-between">
            <div className="mt-2 font-semibold text-gray-700">RS: 6,000</div>
            <div className="mt-2 font-semibold text-gray-700">RS: 15,000</div>
          </div>

          <input
            className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300  "
            type="range"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center rounded border border-gray-200 pl-4">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="bordered-checkbox-1"
            className="ml-2 w-full py-4 text-sm font-medium text-gray-900 "
          >
            Summit Air
          </label>
        </div>

        <div className="mt-2 flex items-center rounded border border-gray-200 pl-4">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="bordered-checkbox-1"
            className="ml-2 w-full py-4 text-sm font-medium text-gray-900 "
          >
            Yeti Airlines
          </label>
        </div>

        <div className="mt-2 flex items-center rounded border border-gray-200 pl-4">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />

          <label
            htmlFor="bordered-checkbox-1"
            className="ml-2 w-full py-4 text-sm font-medium text-gray-900 "
          >
            Sita Air
          </label>
        </div>
      </div>

      <button className="btn-form mt-5">Search</button>
    </div>
  );
};
