import React from "react";
import { LogInForm } from "../../imports/components";
import { flyingAircraft, document } from "../../imports/assets";

export const LogIn = () => {
  return (
    <main className="flex min-h-screen w-full">
      <div className="hidden w-1/2 lg:block">
        <img className="ml-36 min-h-screen" src={flyingAircraft} alt="" />
      </div>

      <div className="flex w-full items-center justify-center lg:mr-[90px] lg:w-1/2">
        <LogInForm />
      </div>
    </main>
  );
};
