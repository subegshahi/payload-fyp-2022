import React from "react";
import { useContractorForm } from "../../../validations/useContractorForm";

export const ContractorForm = () => {
  const { register, handleSubmit, errors } = useContractorForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="rounded-xl border bg-white p-10 shadow-sm">
      <h1 className="text-4xl font-semibold ">Upload Flight</h1>

      <h2 className="font- mt-5 text-lg  text-gray-400 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis libero
        deleniti enim? Repellendus suscipit.
      </h2>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-lg font-light ">Airlines Name</label>
          <input
            className="input-form w-full"
            type="text"
            placeholder="Summit Air"
            {...register("airlinesName")}
          />

          <p className="text-red-600">{errors.airlinesName?.message}</p>
        </div>

        <div className="mt-2 flex gap-5">
          <div className="flex-1">
            <label className="text-lg font-light ">From</label>
            <input
              className="input-form w-full"
              type="text"
              placeholder="Nepalgunj"
              {...register("from")}
            />

            <p className="text-red-600">{errors.from?.message}</p>
          </div>

          <div className="flex-1">
            <label className="text-lg font-light ">To</label>
            <input
              className="input-form w-full"
              type="text"
              placeholder="Rara"
              {...register("to")}
            />

            <p className="text-red-600">{errors.to?.message}</p>
          </div>
        </div>

        <div className="mt-2 flex gap-5">
          <div className="flex-1">
            <label className="text-lg font-light ">Take-off Time</label>
            <input className="input-form w-full" type="time" {...register("takeoffTime")} />

            <p className="text-red-600">{errors.takeoffTime?.message}</p>
          </div>

          <div className="flex-1">
            <label className="text-lg font-light ">Landing Time</label>
            <input className="input-form w-full" type="time" {...register("landingTime")} />

            <p className="text-red-600">{errors.landingTime?.message}</p>
          </div>
        </div>

        <div className="mt-2 flex justify-between gap-5">
          <div className="flex-1">
            <label className="text-lg font-light ">Flight Duration</label>
            <input
              className="input-form w-full"
              type="text"
              placeholder="45 mins"
              {...register("fligtDuration")}
            />

            <p className="text-red-600">{errors.fligtDuration?.message}</p>
          </div>

          <div className="flex-1">
            <label className="text-lg font-light ">Total Passenger Seats</label>
            <input
              className="input-form w-full"
              type="number"
              placeholder="19"
              min="0"
              {...register("totalPassengerSeat")}
            />

            <p className="text-red-600">{errors.totalPassengerSeat?.message}</p>
          </div>
        </div>

        <div className="mt-2">
          <label className="text-lg font-light ">Fare</label>
          <input
            className="input-form w-full"
            type="number"
            placeholder="10,000"
            min="0"
            {...register("fare")}
          />
          <p className="text-red-600">{errors.fare?.message}</p>
        </div>

        <button className="btn-form mt-5">Submit</button>
      </form>
    </div>
  );
};
