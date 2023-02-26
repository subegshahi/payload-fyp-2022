import React from "react";
import {
  maleUser,
  calendar,
  clock,
  downloadPDF,
} from "../../../imports/assets";

export const Ticket = () => {
  return (
    <div className="divide-y-2 divide-dashed divide-gray-400 rounded-xl border bg-white p-10 shadow-sm">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <img className="h-16 w-16" src={maleUser} alt="profile" />

            <div>
              <div className="text-xl font-semibold">John Doe</div>
              <div className="text-lg font-light text-gray-500">Passenger</div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <div className="text-3xl font-semibold">KEP</div>
            <div className="text-lg font-light text-gray-500">Nepalgunj</div>
          </div>

          <div className="w-1/3 border border-dashed border-gray-400" />

          <div>
            <div className="text-3xl font-semibold">RARA</div>
            <div className="text-lg font-light text-gray-500">Rara</div>
          </div>
        </div>

        <div className="mt-5 flex justify-between gap-5 [&>*]:basis-full">
          <div className="flex items-center justify-center rounded-2xl border px-4 py-4">
            <div>
              <img src={calendar} alt="" />
              <div className="mt-2 text-sm font-semibold text-gray-400">
                Departure Date
              </div>
              <div className="text-xl font-semibold">Dec 9, 2023</div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-2xl border px-4 py-4">
            <div>
              <img src={clock} alt="" />
              <div className="mt-2 text-sm font-semibold text-gray-400">
                Departure Time
              </div>
              <div className="text-xl font-semibold">07:00 AM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex [&>*]:basis-full">
        <div className="mt-5">
          <div className="text-lg font-semibold text-gray-400">Flight No.</div>
          <div className="text-lg font-semibold">384BD</div>
        </div>

        <div className="mt-5">
          <div className="text-lg font-semibold text-gray-400">Gate</div>
          <div className="text-lg font-semibold">1A</div>
        </div>

        <div className="mt-5">
          <div className="text-lg font-semibold text-gray-400">Seat</div>
          <div className="text-lg font-semibold ">2B</div>
        </div>
      </div>
    </div>
  );
};
