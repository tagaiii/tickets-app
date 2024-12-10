import { Plane } from "lucide-react";

const TicketCard = ({ ticket, currency }) => {
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split(".").map(Number);
    const date = new Date(2000 + year, month - 1, day);
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
    };
    let formattedDate = date.toLocaleDateString("ru-RU", options);
    formattedDate = formattedDate.replace(" г.", "");
    const [weekday, restDate] = formattedDate.split(", ");
    return `${restDate}, ${weekday}`;
  };
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");

    const formattedHours = hours.padStart(2, "0");
    const formattedMinutes = minutes.padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
  };
  const convertPrice = (priceString, currency) => {
    const exchangeRates = {
      RUB: {
        value: 1,
        symbol: "₽",
      },
      USD: {
        value: 0.01,
        symbol: "$",
      },
      EUR: {
        value: 0.0095,
        symbol: "€",
      },
    };
    const convertedPrice = Math.trunc(
      Math.round(Number(priceString) * exchangeRates[currency].value),
    );
    return `${convertedPrice}${exchangeRates[currency].symbol}`;
  };
  return (
    <div className="ticketCard">
      <div className="ticketCardPrice">
        <img
          src={`${import.meta.env.BASE_URL}turkish-airlines-logo.png`}
          alt="Turkish Airlines Logo"
          height={50}
        />
        <button className="ticketCardBtn">
          Купить за {convertPrice(ticket.price, currency)}
        </button>
      </div>
      <div className="ticketCardInfo">
        <div className="ticketCardFlightInfo">
          <h2 className="ticketCardTime">
            {formatTime(ticket.departure_time)}
          </h2>
          <p className="ticketCardRoute">
            {ticket.origin}, {ticket.origin_name}
          </p>
          <p className="ticketCardDimmedText">
            {formatDate(ticket.departure_date)}
          </p>
        </div>
        <div className="ticketCardStops">
          <p className="ticketCardDimmedText">ПЕРЕСАДОК: {ticket.stops}</p>
          <div className="stopsSeparator">
            <span className="stopsPlaneLine"></span>
            <Plane className="stopsPlane" />
          </div>
        </div>
        <div className="ticketCardFlightInfo">
          <h2 className="ticketCardTime">{formatTime(ticket.arrival_time)}</h2>
          <p className="ticketCardRoute">
            {ticket.destination}, {ticket.destination_name}
          </p>
          <p className="ticketCardDimmedText">
            {formatDate(ticket.arrival_date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
