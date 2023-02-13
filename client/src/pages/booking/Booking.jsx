import React from "react";
import { BookingForm, HeaderBooking } from "../imports";

export const Booking = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#09203f] to-[#537895]">
      <HeaderBooking />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5">
        <BookingForm />
      </div>
    </div>
  );
};
