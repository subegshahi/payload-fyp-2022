import React from "react";
import { ContractorForm, Sidebar, ContractorProfile } from "../../imports/components";

import {} from "./components/ContractorProfile";

export const ContractorHome = () => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>

      <main className="flex-1 gap-10 px-20 lg:flex">
        <div>
          <ContractorProfile />
        </div>

        <div className="mt-10 flex-1 ">
          <ContractorForm />
        </div>
      </main>
    </div>
  );
};
