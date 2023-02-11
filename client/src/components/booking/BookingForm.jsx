import React, { useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export const BookingForm = () => {
  const [adultCounter, setAdultCounter] = useState(1);
  const [childCounter, setChildCounter] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full rounded-md bg-white p-5 shadow-sm"
    >
      {/* <div className="flex gap-10">
        <div className="space-x-2">
          <input type="radio" name="radioGroup1" checked />
          <label>One Way</label>
        </div>

        <div className="space-x-2">
          <input type="radio" name="radioGroup1" />
          <label>Round Trip</label>
        </div>
      </div> */}

      <div className="gap-5 lg:flex [&>*]:basis-full">
        <div className="gap-5 lg:flex [&>*]:basis-full">
          <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              From
            </label>

            <input
              className="input-form"
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
              className="input-form"
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

            <input className="input-form" type="date" name="" id="" />
          </div>

          <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              Return
            </label>

            <input className="input-form" type="date" name="" id="" />
          </div>
        </div>
      </div>

      <div className="items-center justify-center gap-5 lg:flex [&>*]:basis-full">
        <div className="mt-5 lg:w-1/2">
          <label className="text-base font-medium text-gray-600 " htmlFor="">
            Travellers
          </label>

          <div className="mt-2 grid grid-cols-2 gap-5">
            <div className="flex items-center gap-2">
              <button
                className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
                onClick={() => {
                  setAdultCounter(adultCounter + 1);
                }}
              >
                +
              </button>

              <p className="text-center text-gray-600">{adultCounter} Adults</p>

              <button
                className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
                onClick={() => {
                  if (adultCounter > 1) {
                    setAdultCounter(adultCounter - 1);
                  }
                }}
              >
                -
              </button>
            </div>

            <div className="flex items-center gap-2 [&>*]:basis-full">
              <button
                className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
                onClick={() => {
                  setChildCounter(childCounter + 1);
                }}
              >
                +
              </button>

              <p className=" text-center text-gray-600">{childCounter} Child</p>

              <button
                className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
                onClick={() => {
                  if (childCounter > 0) {
                    setChildCounter(childCounter - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>

        <button className="btn-form">Search Flight</button>
      </div>
    </form>
  );
};
