import "./App.css";
import { useTickets } from "./hooks/useTickets.jsx";
import TicketList from "./components/Ticket/TicketList.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState } from "react";

function App() {
  const tickets = useTickets();
  const [currency, setCurrency] = useState("RUB");

  return (
    <main>
      <div className="container">
        <h1 className="header">Tickets</h1>
        <section className="content">
          <Sidebar handleCurrency={setCurrency} activeCurrency={currency} />
          {tickets ? (
            <TicketList tickets={tickets} currency={currency} />
          ) : (
            <p>Loading tickets...</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
