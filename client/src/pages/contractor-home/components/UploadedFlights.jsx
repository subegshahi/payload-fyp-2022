import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar, SalesCard } from "../../../imports/components";
import { FiEdit, AiOutlineDelete } from "../../../imports/assets";

export const UploadedFlights = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/ticket");
        setTickets(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);

  const handleEdit = async (id) => {
    // Find the ticket with the specified ID
    const ticketToUpdate = tickets.find((ticket) => ticket.id === id);

    // Prompt the user to enter updated ticket information
    const updatedTicket = prompt(
      "Enter updated ticket information:",
      JSON.stringify(ticketToUpdate)
    );

    try {
      // Make API request to edit ticket with specified ID
      const response = await axios.put(
        `http://localhost:4000/api/ticket/${id}`,
        JSON.parse(updatedTicket)
      );

      // If successful, update state to reflect changes
      const updatedTickets = tickets.map((ticket) => {
        if (ticket.id === id) {
          return response.data;
        }
        return ticket;
      });
      setTickets(updatedTickets);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this ticket?");

      if (!confirmed) {
        return;
      }

      // Make API request to delete ticket with specified ID
      await axios.delete(`http://localhost:4000/api/ticket/${id}`, {
        data: { id },
      });

      // If successful, update state to reflect changes
      const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
      setTickets(updatedTickets);
    } catch (error) {
      console.error(error);
    }
  };

  const availableFlightsTotal = tickets.reduce((total, element) => {
    return total + element.totalPassengerSeat;
  }, 0);

  const averageFlightPrice =
    tickets.reduce((total, element) => {
      return total + element.fare;
    }, 0) / tickets.length;

  return (
    <div className="flex min-h-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>

      <main className="mt-10 flex-1 px-20 ">
        <div className="gap-5 lg:flex  [&>*]:flex-1">
          <SalesCard title="Available Tickets" number={availableFlightsTotal} growth="0%" />
          <SalesCard title="Unverified Flights" number="5" growth="0%" />
          <SalesCard title="Average Ticket Price" number={averageFlightPrice} growth="0%" />
        </div>

        <div className="mt-10 rounded-xl border bg-white p-5">
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-12">
              <h1 className="col-span-2 text-lg font-semibold text-gray-700">Airlines Name</h1>
              <h1 className="col-span-2 text-lg font-semibold text-gray-700">Routes</h1>
              <h1 className="col-span-2 text-lg font-semibold text-gray-700">Time</h1>
              <h1 className="text-lg font-semibold text-gray-700">Seats</h1>
              <h1 className="text-lg font-semibold text-gray-700">Fare</h1>
              <h1 className="col-span-2 text-lg font-semibold text-gray-700">Status</h1>
              <h1 className="text-lg font-semibold text-gray-700">Edit</h1>
              <h1 className="text-lg font-semibold text-gray-700">Delete</h1>
            </div>

            {tickets.map((ticket, index) => (
              <div key={index} className="mt-5 grid grid-cols-12 pt-5">
                <div className="col-span-2 font-medium ">{ticket.airlinesName}</div>

                <div className="col-span-2 font-medium ">
                  <div>{ticket.from}</div>
                  <div>to</div>
                  <div>{ticket.to}</div>
                </div>

                <div className="col-span-2 font-medium ">
                  <div>{ticket.flightDuration} mins</div>
                  <div>
                    {ticket.takeoffTime} <span className="text-gray-500">(Take off)</span>
                  </div>
                  <div>
                    {ticket.landingTime} <span className="text-gray-500">(Landing off)</span>
                  </div>
                </div>

                <div className="font-medium">{ticket.totalPassengerSeat}</div>
                <div className="font-medium">{ticket.fare}</div>

                <div className="col-span-2 font-medium ">
                  <span className="rounded-full bg-green-300/70 px-4 py-2  text-center text-green-900">
                    Verified
                  </span>
                </div>

                <div className="">
                  <button className="text-lg">
                    <FiEdit
                      className="text-brand-600"
                      size={25}
                      onClick={() => handleEdit(ticket.id)}
                    />
                  </button>
                </div>

                <div className="">
                  <button className="text-lg" onClick={() => handleDelete(ticket.id)}>
                    <AiOutlineDelete className="text-red-600" size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
