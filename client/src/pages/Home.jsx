import React from "react";
import { BookingForm } from "../components/home/BookingForm";
import { Header, Footer, HeroComponent } from "../components/imports";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-[#3a96ff] to-[#2eb6ff]">
        <div className="mx-auto h-[70vh] max-w-7xl px-5 py-5">
          <div className="mt-10 flex">
            <HeroComponent />
          </div>

          <div className="relative mt-10 w-full">
            <BookingForm />
          </div>
        </div>
      </main>

      <div className="mx-auto mt-40 max-w-7xl px-5">
        <div className="h-[600px] rounded-xl bg-white shadow-sm" />
      </div>

      <Footer />
    </>
  );
};
