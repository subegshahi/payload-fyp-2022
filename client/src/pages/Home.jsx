import React from "react";
import { BookingForm } from "../components/forms/BookingForm";
import { Header, Footer } from "../components/imports";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="relative bg-emerald-600 h-72 w-full">
          <div className="max-w-7xl mx-auto px-5 py-5">
            <p className="text-2xl font-bold text-white">
              Deserunt, voluptatibus quisquam esse explicabo consectetur
            </p>
          </div>
        </div>

        <div className="absolute top-56 left-6 max-w-7xl mx-auto px-5 py-5">
          <BookingForm />
        </div>
      </main>

      <Footer />
    </>
  );
};
