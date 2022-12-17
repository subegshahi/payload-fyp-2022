import React from "react";
import { Header, Footer } from "../components/imports";
import { flyingAircraft } from "../assets/imports";
import { LogInForm } from "../components/forms/LogInForm";

export const LogIn = () => {
  return (
    <>
      {/* <Header /> */}

      <section className="w-full h-screen flex">
        <div className="hidden lg:block w-1/2">
          <img className="h-screen" src={flyingAircraft} alt="" />
        </div>

        <div className="w-full flex justify-center items-center lg:w-1/2 lg:mr-[90px]">
          <LogInForm />
        </div>
      </section>
    </>
  );
};
