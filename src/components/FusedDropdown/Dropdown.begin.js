import React, { useState } from "react";
import classNames from "classnames";

export function Dropdown({
  options,
  onSelect,
  placeholder = "Select an option...",  
}) {
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
          })}
        </ul>
      </div>
    </div>
  );
}
