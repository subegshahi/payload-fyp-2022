import React from "react";
import { Header, Footer } from "../components/imports";
import { aircraft } from "../assets/imports";
import { SignUpForm } from "../components/forms/SignUpForm";

export const SignUp = () => {
  return (
    <>
      {/* <Header /> */}

      <section>
        <div className="lg:flex">
          {/* <Link
            className="absolute right-28 top-5 font-medium lg:right-64"
            to="/"
          >
            <RxCrossCircled className="inline-block" size={50} />
          </Link> */}

          <img
            className="hidden lg:inline-block w-1/2 h-screen"
            src={aircraft}
            alt=""
          />
        </div>

        <div className="px-5 flex flex-col h-screen lg:w-1/2 lg:flex lg:items-center">
          <SignUpForm />
        </div>
      </section>
    </>
  );
};
