import React from "react";
import {
  MdOutlinePlace,
  BiUser,
  HiOutlineLogout,
  BsTicketPerforated,
  BiHomeAlt2,
  FiUsers,
  AiOutlineArrowUp,
} from "../../../imports/assets";

export const AdminSalesCard = ({ title, number, growth }) => {
  return (
    <div className="flex gap-7 rounded-xl bg-neutral-600  p-7 shadow-sm">
      <div className="flex items-center  justify-center  rounded-xl bg-brand-400 p-5 text-white">
        <FiUsers size={30} />
      </div>

      <div>
        <h1 className="text-base font-semibold text-white">{title}</h1>
        <div className="flex items-baseline gap-7">
          <h2 className="mt-2 font-digit text-4xl text-white">{number}</h2>

          <div className="flex items-center gap-2 font-digit text-xl font-semibold text-green-500">
            <p>{growth}</p>
            <AiOutlineArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
};
