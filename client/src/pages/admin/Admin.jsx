import React from "react";
import { AdminSidebar, AdminProfile } from "../../imports/components";

export const Admin = () => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-1/5">
        <AdminSidebar />
      </div>

      <main className="flex-1 gap-10 bg-neutral-800 px-20 text-white lg:flex">
        <div className="basis-1/2">
          <AdminProfile />
        </div>

        <div className="mt-10 flex-1">Chart</div>
      </main>
    </div>
  );
};
