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

export const AdminProfile = () => {
  return (
    <div className="relative mt-10 flex flex-1 gap-7 rounded-xl bg-neutral-700 p-6 shadow-sm">
      <img
        className="aspect-square h-40 rounded-2xl object-cover object-top"
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
      />

      <div className="mt-16">
        <span className="absolute -right-4 -top-4  rounded-lg bg-red-800 px-5 py-2">
          <span className="text-sm font-semibold tracking-wide text-white">Admin</span>
        </span>

        <div>
          <h1 className="font mt-2 text-4xl font-semibold text-white">John Doe</h1>
          <h2 className="mt-2 text-lg font-semibold text-white">@johndoe</h2>
        </div>
      </div>
    </div>
  );
};
