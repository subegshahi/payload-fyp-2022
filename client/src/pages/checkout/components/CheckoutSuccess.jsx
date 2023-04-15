import React from "react";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";

export const CheckoutSuccess = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center p-5">
      <div>
        <div className="mr-56 rotate-45">
          <IoTicketOutline size={200} />
        </div>

        <div className="mt-5">
          <p className="text-7xl font-bold text-emerald-600">Thank You</p>
          <p className="mt-5 text-5xl font-bold">Payment Successful</p>
          <p className="mt-5 text-lg  text-gray-600"></p>

          <Link
            className="mt-5 inline-block w-full rounded-md bg-emerald-600 px-4 py-2 text-center font-medium text-white hover:bg-emerald-500"
            to="/booking"
          >
            Go back to booking page
          </Link>
        </div>
      </div>
    </main>
  );
};
