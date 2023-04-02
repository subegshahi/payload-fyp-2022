import React from "react";
import { BookingForm, Header, SearchResultCard } from "../../imports/components";

export const Booking = () => {
  return (
    <div className="flex h-96 flex-col bg-gradient-to-br from-[#09203f] to-[#537895]">
      <Header />

      <main className="mx-auto mt-20 flex w-full max-w-7xl flex-1 flex-col px-5 lg:mt-36">
        <div>
          <BookingForm />
        </div>

        {/* <div className="mt-10">
          <SearchResultCard />
        </div> */}

        {/* <div className="absolute inset-0  flex items-center justify-center bg-black/30  text-white">
          <div className="mx-auto w-full max-w-7xl">
            <SearchResultCard />
          </div>
        </div> */}
      </main>
    </div>
  );
};
