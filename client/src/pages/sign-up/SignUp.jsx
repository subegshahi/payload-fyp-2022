import React from "react";
import { SignUpForm } from "../../imports/components";
import { aircraft } from "../../imports/assets";

export const SignUp = () => {
  return (
    <main className="flex min-h-screen w-full">
      <div className="hidden w-1/2 lg:block">
        <img className="ml-36 min-h-screen" src={aircraft} alt="" />
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/2">
        <SignUpForm />
      </div>
    </main>
  );
};
