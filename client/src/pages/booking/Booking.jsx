import React from "react";
import { BookingForm, Header, SearchResultCard } from "../../imports/components";

export const Booking = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#09203f] to-[#537895]">
      <Header />

      <main className="mx-auto mt-20 flex w-full max-w-7xl flex-1 flex-col px-5 lg:mt-36">
        <div>
          <BookingForm />
        </div>
      </main>
    </div>
  );
};
