import { useState, useEffect } from "react";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const fetchTickets = async () => {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}tickets.json`);
      const data = await response.json();
      setTickets(data.tickets);
    } catch (error) {
      console.error("Failed to fetch tickets:", error);
    }
  };
  useEffect(() => {
    fetchTickets();
  }, []);
  const sortTickets = (a, b) => {
    if (Number(a.price) < Number(b.price)) return -1;
    if (Number(a.price) > Number(b.price)) return 1;
    return 0;
  };

  return tickets.sort(sortTickets);
};
