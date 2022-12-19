import React from "react";
import { BookingForm } from "../components/forms/BookingForm";
import { Header, Footer, HeroComponent } from "../components/imports";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="bg-gradient-to-t from-[#0077FF] to-[#65C8FF] h-fit w-full">
          <div className="max-w-7xl mx-auto px-5 py-5">
            <div className="flex mt-10">
              <HeroComponent />
            </div>

            <div className="max-w-lg mx-auto lg:max-w-7xl mt-10 pb-10">
              <BookingForm />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5">
          <div className="h-[600px] border border-gray-300 rounded-xl mt-10" />
        </div>
      </main>

      <Footer />
    </>
  );
};
