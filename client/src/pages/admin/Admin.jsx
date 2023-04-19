import React from "react";
import {
  AdminSidebar,
  AdminProfile,
  AdminDonutChart,
  AdminAreaChart,
  AdminBarGraph,
} from "../../imports/components";

export const Admin = () => {
  return (
    <div className="flex min-h-screen bg-neutral-800 text-white">
      <div className="basis-1/5">
        <AdminSidebar />
      </div>

      <main className="mx-auto my-10 max-w-6xl flex-1 gap-10 px-20">
        <div>
          <AdminAreaChart />
        </div>

        <div className="gap-10 lg:flex">
          <div className="mt-10 basis-1/2">
            <AdminBarGraph />
          </div>

          <div className="mt-10 flex-1">
            <AdminDonutChart />
          </div>
        </div>
      </main>
    </div>
  );
};
