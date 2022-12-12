import React from "react";

export const FormInput = ({ label, type, placeholder }) => {
  return (
    <div>
      <div className="flex flex-col mt-5">
        <label className="font-medium text-base text-gray-600" htmlFor="">
          {label}
        </label>

        <input
          className="border border-gray-300 py-2 rounded-md mt-2 px-4 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
          type={type}
          placeholder={placeholder}
          name=""
          id=""
        />
      </div>
    </div>
  );
};
