import React from "react";
import { Header, CheckoutForm, Ticket } from "../imports";

export const Checkout = () => {
  return (
    <>
      <div className="bg-[#114c79]">
        <Header />
      </div>

      <main className="mx-auto mt-10 max-w-7xl items-center gap-20 px-5 lg:flex [&>*]:basis-full">
        <div>
          <CheckoutForm />
        </div>

        <div className="mt-10">
          <Ticket />
        </div>
      </main>
    </>
  );
};
