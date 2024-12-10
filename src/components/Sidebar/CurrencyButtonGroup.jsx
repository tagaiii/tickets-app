const CurrencyButtonGroup = ({ handleCurrency, activeCurrency }) => {
  const currencies = ["RUB", "USD", "EUR"];

  return (
    <div className="currencyButtonGroup">
      <h3 className="sidebarCaption">Валюта</h3>
      <div className="currencyButtons">
        {currencies.map((currency, index) => (
          <button
            key={index}
            onClick={() => handleCurrency(currency)}
            className={activeCurrency === currency ? "active" : ""}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencyButtonGroup;
