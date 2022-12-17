import React from "react";
import { Header, Footer } from "../components/imports";
import { flyingAircraft } from "../assets/imports";
import { LogInForm } from "../components/forms/LogInForm";

export const LogIn = () => {
  return (
    <>
      {/* <Header /> */}

      <section>
        <div className="lg:flex">
          <img
            className="hidden lg:inline-block w-1/2 h-screen"
            src={flyingAircraft}
            alt=""
          />
        </div>

        <div className="px-5 flex flex-col justify-center h-screen lg:w-1/2 lg:flex lg:items-center">
          <LogInForm />
        </div>
      </section>
    </>
  );
};
