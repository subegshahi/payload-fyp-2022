import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SeatButton } from "../../../imports/components";

export const SeatModal = ({ setIsSeatModalOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  const cancel = () => {
    setIsSeatModalOpen(false);
    // console.log("Cancel button clicked");
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30  text-white">
          <div className="mx-auto max-w-7xl rounded-2xl bg-white p-10 text-gray-900">
            <div className="flex gap-16">
              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  <SeatButton SeatId="A1" />
                  <SeatButton SeatId="A3" />
                  <SeatButton SeatId="A5" />
                  <SeatButton SeatId="A7" />
                  <SeatButton SeatId="A9" />
                </div>

                <div className="flex flex-col gap-5">
                  <SeatButton SeatId="A2" />
                  <SeatButton SeatId="A4" />
                  <SeatButton SeatId="A6" />
                  <SeatButton SeatId="A8" />
                  <SeatButton SeatId="A10" />
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col gap-5">
                  <SeatButton SeatId="B1" />
                  <SeatButton SeatId="B3" />
                  <SeatButton SeatId="B5" />
                  <SeatButton SeatId="B7" />
                  <SeatButton SeatId="B9" />
                </div>

                <div className="flex flex-col gap-5">
                  <SeatButton SeatId="B2" />
                  <SeatButton SeatId="B4" />
                  <SeatButton SeatId="B6" />
                  <SeatButton SeatId="B8" />
                  <SeatButton SeatId="B10" />
                </div>
              </div>
            </div>

            {/* <div className="mt-5 grid grid-flow-col grid-cols-2 gap-10">
          <button className="col-span-2 inline-block h-16 w-16 rounded-md bg-gray-200 p-3">
            Seat 1
          </button>

          <div className="space-x-5">
            <button className="inline-block h-16 w-16 rounded-md bg-gray-200 p-3">Seat 1</button>

            <button className="inline-block h-16 w-16 rounded-md bg-gray-200 p-3">Seat 1</button>
          </div>
        </div> */}

            <div className="mt-10 flex gap-5  [&>*]:basis-full">
              <button
                className="rounded-xl bg-red-500 py-3 text-lg font-semibold text-white"
                onClick={cancel}
              >
                Cancel
              </button>

              <button
                className="rounded-xl bg-brand-500 py-3 text-lg font-semibold text-white"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
