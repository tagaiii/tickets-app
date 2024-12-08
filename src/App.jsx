import "./App.css";
import { useTickets } from "./hooks/useTickets";

function App() {
  const tickets = useTickets();
  console.log(tickets);
  return (
    <div>
      <h1>Tickets</h1>
      {tickets ? (
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>
              <strong>{ticket.origin}</strong> - {ticket.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading tickets...</p>
      )}
    </div>
  );
}

export default App;
