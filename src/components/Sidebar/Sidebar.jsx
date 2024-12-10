import CurrencyButtonGroup from "./CurrencyButtonGroup.jsx";
import StopButtonGroup from "./StopButtonGroup.jsx";

const Sidebar = ({ handleCurrency, activeCurrency }) => (
  <div className="sidebar">
    <CurrencyButtonGroup
      handleCurrency={handleCurrency}
      activeCurrency={activeCurrency}
    />
    <StopButtonGroup />
  </div>
);

export default Sidebar;
