import React from "react";

export const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="mt-2 w-full rounded-md border border-gray-300 py-2 px-4 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
