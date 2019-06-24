/* eslint-disable */
import React from "react";
import { Dropdown as DropdownTight } from "./components/Dropdown";
import {
  Dropdown,
  DropdownControl,
  DropdownPopover,
  DropdownGroup,
  DropdownGroupHeading,
  DropdownGroupList,
  DropdownList,
  DropdownOption
} from "./components/Dropdown2";
import Select from "react-select";

import { starWarsNames, groupedStarWarsNames } from "./data";

function CustomGroupLabelWithBadge({ group }) {
  return (
    <div className="custom-group__label">
      <span>{group.label}</span>
      <span className="custom-group__badge">{group.options.length}</span>
    </div>
  );
}

function App() {
  function handleSelect(option) {
    console.log("This is new selectedOption", option);
  }

  return (
    <main className="App">
      <div className="Toolbar">
        {/* <div className="Toolbar__item">
          <label>React Select</label>
          <Select
            options={groupedStarWarsNames}
            isClearable={false}
            isSearchable={false}
            menuIsOpen={true}
          />
        </div> */}
        <div className="Toolbar__item">
          <label>Tighly Coupled</label>
          <DropdownTight
            options={groupedStarWarsNames}
            onSelect={handleSelect}
            formatGroupLabel={group => {
              return <CustomGroupLabelWithBadge group={group} />;
            }}
          />
        </div>
        <div className="Toolbar__item">
          <label>Loosely Coupled</label>
          <Dropdown onSelect={handleSelect}>
            <DropdownControl />
            <DropdownPopover>
              <DropdownList>
                {groupedStarWarsNames.map(group => (
                  <DropdownGroup key={group.label}>
                    <DropdownGroupHeading>
                      <CustomGroupLabelWithBadge group={group} />
                    </DropdownGroupHeading>
                    <DropdownGroupList>
                      {group.options.map(nestedOption => (
                        <DropdownOption
                          key={nestedOption.value}
                          option={nestedOption}
                          isDisabled={nestedOption.isDisabled}
                        />
                      ))}
                    </DropdownGroupList>
                  </DropdownGroup>
                ))}
              </DropdownList>
            </DropdownPopover>
          </Dropdown>
        </div>
      </div>
    </main>
  );
}

export default App;
