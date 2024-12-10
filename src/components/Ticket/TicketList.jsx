import TicketCard from "./TicketCard.jsx";

const TicketList = ({ tickets, currency, activeStopsFilter }) => {
  const filterTickets = (tickets) => {
    if (activeStopsFilter.includes("all") || activeStopsFilter.length === 0) {
      return tickets;
    }
    return tickets.filter((ticket) => activeStopsFilter.includes(ticket.stops));
  };
  const filteredTickets = filterTickets(tickets);
  return (
    <div className="ticketList">
      {filteredTickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} currency={currency} />
      ))}
    </div>
  );
};

export default TicketList;
