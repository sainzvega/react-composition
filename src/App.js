/* eslint-disable */
import React from "react";
import { Dropdown as DropdownTight } from "./components/Dropdown"; // this is the tighly coupled component
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
import { starWarsNames, groupedStarWarsNames } from "./data";

/* Uncomment to demonstrate basic select functionality */
// function App() {
//   function handleSelect(option) {
//     console.log("This is new selectedOption", option);
//   }

//   return (
//     <main className="App">
//       <div className="Toolbar">
//         <div className="Toolbar__item">
//           <label>Tightly Coupled</label>
//           <DropdownTight options={starWarsNames} onSelect={handleSelect} />
//         </div>
//         <div className="Toolbar__item">
//           <label>Loosely Coupled</label>
//           <Dropdown onSelect={handleSelect}>
//             <DropdownControl />
//             <DropdownPopover>
//               <DropdownList>
//                 {starWarsNames.map(option => (
//                   <DropdownOption
//                     key={option.value}
//                     option={option}
//                     isDisabled={option.isDisabled}
//                   />
//                 ))}
//               </DropdownList>
//             </DropdownPopover>
//           </Dropdown>
//         </div>
//       </div>
//     </main>
//   );
// }

/* Uncomment for Grouped */
function App() {
  function handleSelect(option) {
    console.log("This is new selectedOption", option);
  }

  return (
    <main className="App">
      <div className="Toolbar">
        <div className="Toolbar__item">
          <label>Tightly Coupled</label>
          <DropdownTight
            options={groupedStarWarsNames}
            onSelect={handleSelect}
            formatGroupLabel={group => {
              return (
                <div className="custom-group__label">
                  <span>{group.label}</span>
                  <span className="custom-group__badge">
                    {group.options.length}
                  </span>
                </div>
              );
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
                  <div className="dropdown__group">
                    <div className="dropdown__groupHeading">
                      <div className="custom-group__label">
                        <span>{group.label}</span>
                        <span className="custom-group__badge">
                          {group.options.length}
                        </span>
                      </div>
                    </div>
                    <div>
                      {group.options.map(nestedOption => (
                        <DropdownOption
                          key={nestedOption.value}
                          option={nestedOption}
                          isDisabled={nestedOption.isDisabled}
                        />
                      ))}
                    </div>
                  </div>
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
