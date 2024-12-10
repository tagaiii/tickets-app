import CurrencyButtonGroup from "./CurrencyButtonGroup.jsx";
import StopButtonGroup from "./StopButtonGroup.jsx";

const Sidebar = ({
  handleCurrency,
  activeCurrency,
  handleStopsFilter,
  activeStopsFilter,
}) => (
  <div className="sidebar">
    <CurrencyButtonGroup
      handleCurrency={handleCurrency}
      activeCurrency={activeCurrency}
    />
    <StopButtonGroup
      handleStopsFilter={handleStopsFilter}
      activeStopsFilter={activeStopsFilter}
    />
  </div>
);

export default Sidebar;
