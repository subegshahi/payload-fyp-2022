import React, { useState } from "react";
import { adultCounter, childCounter } from "../../../signals/AdultChildCounter";

export const AdultChildCounter = () => {
  const increaseAdultCounter = () => {
    adultCounter.value++;
  };

  const decreaseAdultCounter = () => {
    if (adultCounter.value > 1) {
      adultCounter.value = adultCounter.value - 1;
    }
  };

  const increaseChildCounter = () => {
    childCounter.value++;
  };

  const decreaseChildCounter = () => {
    if (childCounter.value > 0) {
      childCounter.value = childCounter.value - 1;
    }
  };

  // const [adultCounter, setAdultCounter] = useState(1);
  // const [childCounter, setChildCounter] = useState(0);

  // const increaseAdultCounter = () => {
  //   setAdultCounter(adultCounter + 1);
  // };

  // const decreaseAdultCounter = () => {
  //   adultCounter > 1 && setAdultCounter(adultCounter - 1);
  // };

  // const increaseChildCounter = () => {
  //   setChildCounter(childCounter + 1);
  // };

  // const decreaseChildCounter = () => {
  //   childCounter > 0 && setChildCounter(childCounter - 1);
  // };

  return (
    <>
      <div className="mt-5 lg:w-1/2">
        <label className="text-base font-medium text-gray-600 " htmlFor="">
          Travellers
        </label>

        <div className="mt-2 grid grid-cols-2 gap-5">
          <div className="flex items-center gap-2">
            <button
              className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
              onClick={increaseAdultCounter}
              type="button"
              // {...register("adult")}
            >
              +
            </button>

            <p className="text-center text-gray-600">{adultCounter} Adults</p>

            <button
              className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
              onClick={decreaseAdultCounter}
              type="button"
              // {...register("adult")}
            >
              -
            </button>
          </div>

          <div className="flex items-center gap-2 [&>*]:basis-full">
            <button
              className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
              onClick={increaseChildCounter}
              type="button"
              // {...register("child")}
            >
              +
            </button>

            <p className=" text-center text-gray-600">{childCounter} Child</p>

            <button
              className="inline-block w-1/4 rounded-md bg-brand-100 text-lg font-bold text-brand-500"
              onClick={decreaseChildCounter}
              type="button"
              // {...register("child")}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
