import { useState, useEffect } from "react";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const fetchTickets = async () => {
    try {
      const response = await fetch(`/tickets.json`);
      const data = await response.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error("Failed to fetch tickets:", error);
    }
  };
  useEffect(() => {
    fetchTickets();
  }, []);

  return tickets;
};
