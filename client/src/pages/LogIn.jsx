import React from "react";
import { Header, Footer, LogInForm } from "../components/imports";
import { flyingAircraft, document } from "../assets/imports";

export const LogIn = () => {
  return (
    <section className="flex min-h-screen w-full">
      <div className="hidden w-1/2 lg:block">
        <img className="h-screen" src={flyingAircraft} alt="" />
      </div>

      <div className="flex w-full items-center justify-center lg:mr-[90px] lg:w-1/2">
        <LogInForm />
      </div>
    </section>
  );
};
