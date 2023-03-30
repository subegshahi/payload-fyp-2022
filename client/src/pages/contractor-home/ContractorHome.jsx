import React from "react";
import { ContractorForm, Sidebar } from "../../imports/components";

export const ContractorHome = () => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-1/6">
        <Sidebar />
      </div>

      <main className="flex flex-1 items-center justify-center px-5">
        <div className="max-w-2xl">
          <ContractorForm />
        </div>
      </main>
    </div>
  );
};
