import React from "react";

export const SeatButton = ({ SeatId }) => {
  return (
    <button className="inline-block h-16 w-16 rounded-md bg-gray-200 p-3 font-semibold text-gray-700">
      {SeatId}
    </button>
  );
};
