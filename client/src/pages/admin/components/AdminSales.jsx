import React, { useEffect, useState } from "react";
import { AdminSidebar, AdminSalesCard } from "../../../imports/components";
// import {} from "../../../imports/assets";

export const AdminSales = () => {
  return (
    <div className="flex min-h-screen bg-neutral-800">
      <div className="basis-1/5">
        <AdminSidebar />
      </div>

      <main className="my-10 flex-1  px-20">
        <div className="gap-5 lg:flex  [&>*]:flex-1">
          <AdminSalesCard title="Available Tickets" number="1" growth="0%" />
          <AdminSalesCard title="Unverified Flights" number="5" growth="0%" />
          <AdminSalesCard title="Average Ticket Price" number="1" growth="0%" />
        </div>
      </main>
    </div>
  );
};
