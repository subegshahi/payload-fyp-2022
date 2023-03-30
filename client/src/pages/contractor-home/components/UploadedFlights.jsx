import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar, SalesCard } from "../../../imports/components";
import { FiEdit, AiOutlineDelete } from "../../../imports/assets";

FiEdit;

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

  return (
    <div className="flex min-h-screen">
      <div className="basis-1/5">
        <Sidebar />
      </div>

      <main className="mt-10 px-20 ">
        <div className="flex gap-5 [&>*]:flex-1">
          <SalesCard title="Total Ticket Sales" number="7,000" growth="7%" />
          <SalesCard title="New Customers" number="1,000" growth="20%" />
          <SalesCard title="Average Flights Per Day" number="3" growth="5%" />
        </div>

        <div className="mt-10 rounded-xl border bg-white p-5">
          <div className="divide-y divide-gray-200">
            <div className="flex [&>*]:flex-1">
              <h1 className="text-lg font-semibold text-gray-700">Airlines Name</h1>
              <h1 className="text-lg font-semibold text-gray-700"> </h1>
              <h1 className="text-lg font-semibold text-gray-700">Time</h1>
              <h1 className="text-lg font-semibold text-gray-700">Passenger Seat</h1>
              <h1 className="text-lg font-semibold text-gray-700">Fare</h1>
              <h1 className="text-lg font-semibold text-gray-700">Status</h1>
              <h1 className="text-lg font-semibold text-gray-700"></h1>
              <h1 className="text-lg font-semibold text-gray-700"></h1>
            </div>

            {tickets.map((ticket) => (
              <div className="mt-5 flex pt-7">
                <div className="basis-1/6 text-lg">{ticket.airlinesName}</div>

                <div className="basis-1/5 text-lg">
                  <div>{ticket.from}</div>
                  <div>to</div>
                  <div>{ticket.to}</div>
                </div>

                <div className="basis-1/5 text-lg">
                  <div>{ticket.takeoffTime}</div>
                  <div>{ticket.landingTime}</div>
                  <div>{ticket.flightDuration}</div>
                </div>

                <div className="flex-1 text-lg">{ticket.totalPassengerSeat}</div>
                <div className="flex-1 text-lg">{ticket.fare}</div>

                <div className="flex-1 text-lg">
                  <span className="rounded-full bg-green-300/70 px-4 py-2  text-center text-green-900">
                    Verified
                  </span>
                </div>

                <div className="basis-[5%]">
                  <button className="text-lg">
                    <FiEdit className="text-brand-600" size={25} />
                  </button>
                </div>

                <div className="basis-[5%]">
                  <button className="text-lg">
                    <AiOutlineDelete className="text-red-600" size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <table className="mt-10">
          <thead>
            <tr>
              {/* <th className="px-4 py-2">ID</th> */}
              <th className="px-4 py-2">Airline Name</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">To</th>
              <th className="px-4 py-2">Takeoff Time</th>
              <th className="px-4 py-2">Landing Time</th>
              <th className="px-4 py-2">Flight Duration</th>
              <th className="px-4 py-2">Total Passenger Seat</th>
              <th className="px-4 py-2">Fare</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                {/* <td className="border px-4 py-2">{ticket.id}</td> */}
                <td className="border px-4 py-2">{ticket.airlinesName}</td>
                <td className="border px-4 py-2">{ticket.from}</td>
                <td className="border px-4 py-2">{ticket.to}</td>
                <td className="border px-4 py-2">{ticket.takeoffTime}</td>
                <td className="border px-4 py-2">{ticket.landingTime}</td>
                <td className="border px-4 py-2">{ticket.flightDuration}</td>
                <td className="border px-4 py-2">{ticket.totalPassengerSeat}</td>
                <td className="border px-4 py-2">{ticket.fare}</td>
                <td className="border px-4 py-2">
                  <button
                    className="font-semibold text-gray-500"
                    onClick={() => handleEdit(ticket.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="font-semibold text-red-500"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
