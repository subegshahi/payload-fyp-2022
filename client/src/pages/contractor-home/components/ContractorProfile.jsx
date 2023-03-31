import React from "react";
import {
  MdOutlinePlace,
  BiUser,
  HiOutlineLogout,
  BsTicketPerforated,
  BiHomeAlt2,
  FaPlane,
  payloadLogo,
  payloadLogoPNG,
} from "../../../imports/assets";

export const ContractorProfile = () => {
  return (
    <div className="mt-10 flex flex-1 gap-7 rounded-xl border bg-white p-10 shadow-sm">
      <img
        className=" aspect-square h-40 rounded-2xl object-cover object-top"
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />

      <div>
        <span className="rounded-lg bg-brand-500 px-5 py-1">
          <span className="text-lg font-semibold text-white">Contractor</span>
        </span>

        <div>
          <h1 className="mt-2 text-6xl font-semibold text-gray-800">John Doe</h1>
          <h2 className="mt-2 text-lg">@johndoe</h2>
        </div>
      </div>
    </div>
  );
};
