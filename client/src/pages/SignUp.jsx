import React from "react";
import { Header, Footer, SignUpForm } from "../components/imports";
import { aircraft } from "../assets/imports";

export const SignUp = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="w-full h-screen flex">
        <div className="hidden lg:block w-1/2">
          <img className="h-screen" src={aircraft} alt="" />
        </div>

        <div className="w-full flex justify-center items-center lg:w-1/2 lg:mr-[90px]">
          <SignUpForm />
        </div>
      </section>
    </>
  );
};
