import React from "react";
import { BookingForm, Header } from "../../imports/components";

export const Booking = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#09203f] to-[#537895]">
      <Header />

      <main className="mx-auto mt-40 flex w-full max-w-7xl flex-1 flex-col px-5">
        <BookingForm />
      </main>
    </div>
  );
};
