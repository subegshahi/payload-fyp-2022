import React from "react";
import { ContractorForm, Header } from "../imports";

export const ContractorHome = () => {
  return (
    <>
      <div className="bg-[#114c79]">
        <Header />
      </div>

      <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5">
        <div>
          <ContractorForm />
        </div>
      </main>
    </>
  );
};
