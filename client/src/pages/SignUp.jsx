import React from "react";
import { Header, Footer, SignUpForm } from "../components/imports";
import { aircraft } from "../assets/imports";

export const SignUp = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="flex min-h-screen w-full">
        <div className="hidden w-1/2 lg:block">
          <img className="h-screen" src={aircraft} alt="" />
        </div>

        <div className="flex w-full items-center justify-center lg:mr-[90px] lg:w-1/2">
          <SignUpForm />
        </div>
      </section>
    </>
  );
};
