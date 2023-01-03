import React from "react";
import { BookingForm } from "../components/home/BookingForm";
import { Header, Footer, HeroComponent } from "../components/imports";

export const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <main className="bg-gradient-to-br from-[#09203f] to-[#537895]">
        <Header />

        <div className="mx-auto h-[60vh] max-w-7xl px-5 py-5">
          <div>
            <HeroComponent />
          </div>

          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </main>

      {/* <section className="mx-auto mt-10 max-w-7xl px-5">
        <div className="h-[600px] rounded-xl bg-white shadow-sm" />
      </section> */}

      {/* <Footer /> */}
    </>
  );
};
