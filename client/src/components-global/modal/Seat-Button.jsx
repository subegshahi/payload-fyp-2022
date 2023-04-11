import React, { useState } from "react";

export const SeatButton = ({ SeatId }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <button
      className={`inline-block h-16 w-16 rounded-md bg-gray-200 p-3 font-semibold text-gray-700 transition-all hover:scale-110 hover:bg-gray-600/70 hover:text-white ${
        isClicked ? "bg-blue-500 text-white" : ""
      }`}
      onClick={handleClick}
    >
      {SeatId}
    </button>
  );
};
