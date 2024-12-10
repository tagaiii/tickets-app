import TicketCard from "./TicketCard.jsx";

const TicketList = ({ tickets, currency }) => {
  return (
    <div className="ticketList">
      {tickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} currency={currency} />
      ))}
    </div>
  );
};

export default TicketList;
