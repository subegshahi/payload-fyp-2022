import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SearchResultCard } from "../../../imports/components";

import { useBookingForm } from "../../../validations/useBookingForm";
import { AdultChildCounter } from "./AdultChildCounter";

export const BookingForm = () => {
  const [tickets, setTickets] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useBookingForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/api/search", {
        from: data.from,
        to: data.to,
        date: data.departureDate,
      });
      setTickets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
                placeholder="0"
                name=""
                id=""
                min="0"
                defaultValue="0"
                {...register("child")}
              />

              <p className="text-red-600">{errors.child?.message}</p>
            </div>
          </div>

          {/* Child and Adult Counter */}
          {/* <AdultChildCounter /> */}

          <div className="flex gap-5">
            <button className="btn-form mt-5 lg:mt-12">Search Flight</button>

            {/* <Link className="btn-form mt-5 lg:mt-12" to="/searchresult">
            Search Result Page
          </Link> */}
          </div>
        </div>
      </form>

      {formSubmitted && tickets.length > 0 ? (
        <div className="mt-10">
          {tickets.map((ticket, index) => (
            <SearchResultCard
              key={index}
              airlinesName={ticket.airlinesName}
              date={ticket.date.slice(0, 10)}
              from={ticket.from}
              to={ticket.to}
              takeoffTime={ticket.takeoffTime}
              landingTime={ticket.landingTime}
              fare={ticket.fare}
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center">{formSubmitted ? "No search results available." : ""}</p>
      )}
    </>
  );
};
