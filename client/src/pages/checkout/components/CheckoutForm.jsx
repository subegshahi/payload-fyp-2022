import React from "react";

export const CheckoutForm = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold">Checkout, make payment</h1>

      <h2 className="mt-2 text-lg font-light">
        To finalize the ticket booking, kindly complete your payment using a
        Khalti Wallet
      </h2>

      <form className="mt-10" action="">
        <div>
          <label className="text-lg font-light text-gray-500">Khalti ID</label>
          <input className="input-form w-full" type="number" />
        </div>

        <div className="mt-2">
          <label className="text-lg font-light text-gray-500">
            Voucher Code
          </label>
          <input className="input-form w-full" type="text" />
        </div>

        <button className="btn-form">Pay Now</button>
      </form>
    </>
  );
};
