import React from "react";
import { BookingForm } from "../components/forms/BookingForm";
import { Header, Footer } from "../components/imports";
import { boardingPass } from "../assets/imports";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className=" bg-gradient-to-t from-[#0077FF] to-[#65C8FF] h-fit w-full">
          <div className="max-w-7xl mx-auto px-5 py-5">
            <div className="flex mt-10">
              <div className="lg:w-1/3 flex justify-center items-center">
                <p className="text-4xl font-bold text-white mt-5">
                  Deserunt, voluptatibus quisquam esse explicabo consectetur
                </p>
              </div>

              <img
                className="hidden lg:inline-block w-2/3 aspect-video object-cover"
                src={boardingPass}
                alt=""
              />
            </div>

            <div className="max-w-lg mx-auto lg:max-w-7xl mt-10 pb-10">
              <BookingForm />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5">
          <div className="h-[500px] bg-gray-400 mt-10"></div>
        </div>
      </main>

      <Footer />
    </>
  );
};
