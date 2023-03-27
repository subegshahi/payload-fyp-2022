import React from "react";
import { ContractorForm, Header, Sidebar } from "../../imports/components";

export const ContractorHome = () => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-1/4">
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
