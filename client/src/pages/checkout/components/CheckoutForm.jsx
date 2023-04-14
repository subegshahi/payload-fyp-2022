import React from "react";
import { useCheckoutForm } from "../../../validations/useCheckoutForm";

export const CheckoutForm = () => {
  const { register, handleSubmit, errors } = useCheckoutForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Checkout, make payment</h1>

      <h2 className="mt-2 text-lg font-light">
        To finalize the ticket booking, complete your payment with Stripe
      </h2>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label className="text-lg font-light text-gray-500">Khalti ID</label>

          <input className="input-form w-full" type="number" {...register("khaltiId")} />

          <p className="text-red-600">{errors.khaltiId?.message}</p>
        </div>

        <div className="mt-2">
          <label className="text-lg font-light text-gray-500">Voucher Code</label>

          <input className="input-form w-full" type="text" {...register("voucherCode")} />
        </div> */}

        <button className="btn-form mt-5">Pay Now</button>
      </form>
    </>
  );
};
