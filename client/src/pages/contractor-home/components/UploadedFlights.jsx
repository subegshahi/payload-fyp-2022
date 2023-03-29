import React, { useEffect, useState } from "react";
import { Sidebar } from "../../../imports/components";
import axios from "axios";

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
      <div className="basis-1/4">
        <Sidebar />
      </div>

      <main className="flex flex-1 items-center justify-center px-5">
        <table className="">
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
