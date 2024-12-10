const StopButtonGroup = ({ handleStopsFilter, activeStopsFilter }) => {
  const plainOptions = [
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
    handleStopsFilter((prevCheckedList) =>
      isChecked
        ? [...prevCheckedList, value]
        : prevCheckedList.filter((val) => val !== value),
    );
  };
  return (
    <div className="stopButtonGroup">
      <h3 className="sidebarCaption stopCaption">Количество пересадок</h3>
      <div className="checkboxGroup">
        {plainOptions.map((option, index) => (
          <div key={index} className="stopCheckboxLine">
            <div className="stopCheckbox">
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                value={option.value}
                onChange={(e) =>
                  handleCheckboxChange(option.value, e.target.checked)
                }
                checked={activeStopsFilter.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StopButtonGroup;
