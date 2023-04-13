import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { SearchResultCard, SeatModal } from "../../../imports/components";
import { useBookingForm } from "../../../validations/useBookingForm";
import { AdultChildCounter } from "./AdultChildCounter";

export const BookingForm = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const { register, handleSubmit, errors } = useBookingForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const onSubmit = async (data, event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:4000/api/ticket", {
        params: {
          from: data.from,
          to: data.to,
          departureDate: data.departureDate,
        },
      });

      setSearchResults(response.data); // Update search results state with the received data
    } catch (error) {
      console.error(error);
    }
  };

  const adultCountChangeHandler = (event) => setAdultCount(parseInt(event.target.value));
  const childCountChangeHandler = (event) => setChildCount(parseInt(event.target.value));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md bg-white p-5 shadow-sm">
        {/* <div className="flex gap-10">
        <div className="space-x-2">
          <input type="radio" name="radioGroup1" checked />
          <label>One Way</label>
        </div>

        <div className="space-x-2">
          <input type="radio" name="radioGroup1" />
          <label>Round Trip</label>
        </div>
      </div> */}

        <div className="gap-5 lg:flex [&>*]:basis-full">
          <div className="gap-5 lg:flex [&>*]:basis-full">
            <div className="mt-5 flex flex-col">
              <label className="text-base font-medium text-gray-600" htmlFor="">
                From
              </label>

              <input
                className="input-form"
                type="text"
                placeholder="Nepalgunj (KEP)"
                name=""
                id=""
                {...register("from")}
              />

              <p className="text-red-600">{errors.from?.message}</p>
            </div>

            <div className="mt-5 flex flex-col">
              <label className="text-base font-medium text-gray-600" htmlFor="">
                To
              </label>

              <input
                className="input-form"
                type="text"
                placeholder="RARA (RARA)"
                name=""
                id=""
                {...register("to")}
              />

              <p className="text-red-600">{errors.to?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="mt-5 flex flex-col">
              <label className="text-base font-medium text-gray-600" htmlFor="">
                Departure Date
              </label>

              <input
                className="input-form"
                type="date"
                name=""
                id=""
                {...register("departureDate")}
              />

              <p className="text-red-600">{errors.departureDate?.message}</p>
            </div>

            {/* <div className="mt-5 flex flex-col">
            <label className="text-base font-medium text-gray-600" htmlFor="">
              Return Date
            </label>

            <input
              className="input-form"
              type="date"
              name=""
              id=""
              {...register("returnDate")}
            />
          </div> */}
          </div>
        </div>

        <div className="items-center justify-center gap-5 lg:flex [&>*]:basis-full">
          <div className="gap-5 lg:flex [&>*]:basis-full">
            <div className="mt-5 flex flex-col">
              <label className="text-base font-medium text-gray-600" htmlFor="">
                Adult
              </label>

              <input
                className="input-form"
                type="number"
                placeholder="1"
                name=""
                id=""
                min="1"
                defaultValue="1"
                onChange={adultCountChangeHandler}
                {...register("adult")}
              />

              <p className="text-red-600">{errors.adult?.message}</p>
            </div>

            <div className="mt-5 flex flex-col">
              <label className="text-base font-medium text-gray-600" htmlFor="">
                Child
              </label>

              <input
                className="input-form"
                type="number"
                placeholder="1"
                name=""
                id=""
                min="0"
                defaultValue="1"
                onChange={childCountChangeHandler}
                {...register("child")}
              />

              <p className="text-red-600">{errors.child?.message}</p>
            </div>
          </div>

          {/* Child and Adult Counter */}
          {/* <AdultChildCounter /> */}

          <div className="flex gap-5">
            <button className="btn-form mt-5 lg:mt-12">Search Flight</button>
          </div>
        </div>
      </form>

      {/* Search Results */}
      {searchResults && (
        <div>
          <h1 className="mt-10 text-2xl font-bold text-white">Search Results:</h1>
          {searchResults.map((result) => (
            <SearchResultCard
              key={result.id}
              airlinesName={result.airlinesName}
              date={result.date}
              from={result.from}
              to={result.to}
              fare={result.fare}
              takeoffTime={result.takeoffTime}
              landingTime={result.landingTime}
              adultCount={adultCount}
              childCount={childCount}
            />
          ))}
        </div>
      )}
    </>
  );
};
