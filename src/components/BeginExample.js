import React from "react";
import { Dropdown as FusedDropdown } from "./FusedDropdown/Dropdown.begin";
import {
  Dropdown as CompoundDropdown,
  DropdownControl as CompoundDropdownControl,
  DropdownPopover as CompoundDropdownPopover,
  DropdownList as CompoundDropdownList,
  DropdownOption as CompoundDropdownOption
} from "./CompoundDropdown/Dropdown.begin"; // we must import all the pieces individually
import { names } from "../data";

export default function BeginExample() {
  function handleSelect(option) {
    // normally we would be setting some state in here
    console.log("This is new selectedOption", option);
  }

  return (
    <main className="App">
      <div className="Toolbar">
        <div className="Toolbar__item">
          <label>Fused Dropdown:</label>
          <FusedDropdown options={names} onSelect={handleSelect} />
        </div>
        <div className="Toolbar__item">
          <label>Compound Dropdown:</label>
          <CompoundDropdown onSelect={handleSelect}>
            <CompoundDropdownControl />
            <CompoundDropdownPopover>
              <CompoundDropdownList>
                {names.map(option => (
                  <CompoundDropdownOption
                    key={option.value}
                    option={option}
                    isDisabled={option.isDisabled}
                  />
                ))}
              </CompoundDropdownList>
            </CompoundDropdownPopover>
          </CompoundDropdown>
        </div>
      </div>
    </main>
  );
}
