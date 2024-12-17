const StopButtonGroup = ({ handleStopsFilter, activeStopsFilter }) => {
  const options = [
    {
      value: "all",
      label: "Все",
    },
    {
      value: 0,
      label: "Без пересадок",
    },
    {
      value: 1,
      label: "1 пересадка",
    },
    {
      value: 2,
      label: "2 пересадки",
    },
    {
      value: 3,
      label: "3 пересадки",
    },
  ];
  const handleCheckboxChange = (value, isChecked) => {
    if (value === "all") {
      handleStopsFilter(["all"]);
    }
    if (isChecked) {
      handleStopsFilter((prevCheckedList) => [
        ...prevCheckedList.filter((val) => val !== "all"),
        value,
      ]);
    } else {
      handleStopsFilter((prevStopsFilter) =>
        prevStopsFilter.filter((val) => val !== value),
      );
      if (activeStopsFilter.filter((val) => val !== value).length === 0) {
        handleStopsFilter(["all"]);
      }
    }
  };
  return (
    <div className="stopButtonGroup">
      <h3 className="sidebarCaption stopCaption">Количество пересадок</h3>
      <div className="checkboxGroup">
        {options.map((option, index) => (
          <div key={index} className="stopCheckboxLine">
            <div className="stopCheckbox">
              <div className="stopCheckboxInput">
                <input
                  className="checkbox"
                  type="checkbox"
                  id={option.value}
                  name={option.value}
                  value={option.value}
                  onChange={(e) =>
                    handleCheckboxChange(option.value, e.target.checked)
                  }
                  checked={activeStopsFilter.includes(option.value)}
                  disabled={
                    !!(
                      option.value === "all" &&
                      activeStopsFilter.includes(option.value) &&
                      activeStopsFilter.length === 1
                    )
                  }
                />
                <label htmlFor={option.value} className="checkboxLabel">
                  {option.label}
                </label>
              </div>
              <span
                className="stopOnlyBtn"
                onClick={() => handleStopsFilter([option.value])}
              >
                ТОЛЬКО
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StopButtonGroup;
