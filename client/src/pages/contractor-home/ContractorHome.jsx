import React from "react";
import { ContractorForm, Header } from "../imports";

export const ContractorHome = () => {
  return (
    <div>
      <div className="bg-[#114c79]">
        <Header />
      </div>

      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5">
        <div className="mt-10">
          <ContractorForm />
        </div>
      </div>
    </div>
  );
};
