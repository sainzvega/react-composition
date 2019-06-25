import React, { useState, useContext, useMemo, createContext } from "react";
import classNames from "classnames";

const DropdownContext = createContext();

export function Dropdown({ onSelect, children }) {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const dropdownContextValue = useMemo(() => {
    return {
      visible,
      setVisible,
      selectedOption,
      setSelectedOption,
      onSelect
    };
  }, [visible, setVisible, selectedOption, setSelectedOption, onSelect]);

  return (
    <DropdownContext.Provider value={dropdownContextValue}>
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownControl({ placeholder = "Select an option..." }) {
  const { visible, setVisible, selectedOption } = useContext(DropdownContext);
  return (
    <div className="dropdown__control" onClick={() => setVisible(!visible)}>
      <div className="dropdown__value">
        {selectedOption ? selectedOption.label : placeholder}
      </div>      
    </div>
  );
}

export function DropdownPopover({ children }) {
  const { visible } = useContext(DropdownContext);
  return (
    <div className="dropdown__popover" tabIndex="-1" hidden={!visible}>
      {children}
    </div>
  );
}

export function DropdownList({ children }) {
  return <ul className="dropdown__list">{children}</ul>;
}

export function DropdownOption({ children, option, isDisabled, className }) {
  const {
    selectedOption,
    onSelect,
    setSelectedOption,
    setVisible
  } = useContext(DropdownContext);

  function handleOptionSelect(option) {
    if (isDisabled) {
      return;
    }
    onSelect && onSelect(option);
    setSelectedOption(option);
    setVisible(false);
  }

  const isSelected = selectedOption === option;
  return (
    <li
      className={classNames({
        dropdown__option: true,
        "dropdown__option--selected": isSelected,
        "dropdown__option--disabled": isDisabled
      })}
      onClick={() => handleOptionSelect(option)}
      children={children || option.label}
    />
  );
}
