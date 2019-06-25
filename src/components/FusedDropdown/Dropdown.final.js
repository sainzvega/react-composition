import React, { useState } from "react";
import classNames from "classnames";

export function Dropdown({
  options,
  onSelect,
  placeholder = "Select an option...",
  isGrouped = false,
  formatGroupLabel
}) {
  //#region State & Handlers
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionSelect(option) {
    if (option.isDisabled) {
      return;
    }
    onSelect && onSelect(option);
    setSelectedOption(option);
    setVisible(false);
  }
  //#endregion State & Handlers

  return (
    <div className="dropdown">
      <div className="dropdown__control" onClick={() => setVisible(!visible)}>
        <div className="dropdown__value">
          {selectedOption ? selectedOption.label : placeholder}
        </div>
      </div>
      <div className="dropdown__popover" tabIndex="-1" hidden={!visible}>
        <ul className="dropdown__list">
          {options.map(option => {
            if (isGrouped && option.options) {
              // grouped case
              return (
                <div key={option.label} className="group">
                  <div className="group__heading">
                    {formatGroupLabel ? formatGroupLabel(option) : option.label}
                  </div>
                  <div>
                    {option.options.map(nestedOption => {
                      const { isDisabled } = nestedOption;
                      const isSelected =
                        !isDisabled && selectedOption === nestedOption;
                      return (
                        <li
                          key={nestedOption.value}
                          className={classNames({
                            dropdown__option: true,
                            "dropdown__option--selected": isSelected,
                            "dropdown__option--disabled": isDisabled
                          })}
                          onClick={() => handleOptionSelect(nestedOption)}
                        >
                          {nestedOption.label}
                        </li>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              // normal case
              const { isDisabled } = option;
              const isSelected = !isDisabled && selectedOption === option;
              return (
                <li
                  key={option.value}
                  className={classNames({
                    dropdown__option: true,
                    "dropdown__option--selected": isSelected,
                    "dropdown__option--disabled": isDisabled
                  })}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
