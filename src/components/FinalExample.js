import React from "react";
import { Dropdown as FusedDropdown } from "./FusedDropdown/Dropdown.final";
import {
  Dropdown as CompoundDropdown,
  DropdownControl as CompoundDropdownControl,
  DropdownPopover as CompoundDropdownPopover,
  DropdownList as CompoundDropdownList,
  DropdownOption as CompoundDropdownOption
} from "./CompoundDropdown/Dropdown.final";
import { groupedNames } from "../data";

export default function FinalExample() {
  function handleSelect(option) {
    console.log("This is new selectedOption", option);
  }

  return (
    <main className="App">
      <div className="Toolbar">
        <div className="Toolbar__item">
          <label>Fused Dropdown:</label>
          <FusedDropdown options={groupedNames} onSelect={handleSelect} />
        </div>
        <div className="Toolbar__item">
          <label>Compound Dropdown:</label>
          <CompoundDropdown onSelect={handleSelect}>
            <CompoundDropdownControl />
            <CompoundDropdownPopover>
              <CompoundDropdownList>
                {groupedNames.map(group => (
                  <div key={group.label} className="group">
                    <div className="group__heading">{group.label}</div>
                    <div>
                      {group.options.map(nestedOption => (
                        <CompoundDropdownOption
                          key={nestedOption.value}
                          option={nestedOption}
                          isDisabled={nestedOption.isDisabled}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </CompoundDropdownList>
            </CompoundDropdownPopover>
          </CompoundDropdown>
        </div>
      </div>
    </main>
  );
}

// NOTE: This has additional funcitonality.
// import React from "react";
// import { Dropdown as FusedDropdown } from "./FusedDropdown/Dropdown.final";
// import {
//   Dropdown as CompoundDropdown,
//   DropdownControl as CompoundDropdownControl,
//   DropdownPopover as CompoundDropdownPopover,
//   DropdownList as CompoundDropdownList,
//   DropdownOption as CompoundDropdownOption
// } from "./CompoundDropdown/Dropdown.final";
// import { groupedNames } from "../data";

// export default function FinalExample() {
//   function handleSelect(option) {
//     console.log("This is new selectedOption", option);
//   }

//   return (
//     <main className="App">
//       <div className="Toolbar">
//         <div className="Toolbar__item">
//           <label>Fused Dropdown:</label>
//           <FusedDropdown
//             options={groupedNames}
//             onSelect={handleSelect}
//             formatGroupLabel={group => (
//               <div className="custom-group">
//                 <span>{group.label}</span>
//                 <span className="custom-group__badge">
//                   {group.options.length}
//                 </span>
//               </div>
//             )}
//           />
//         </div>
//         <div className="Toolbar__item">
//           <label>Compound Dropdown:</label>
//           <CompoundDropdown onSelect={handleSelect}>
//             <CompoundDropdownControl />
//             <CompoundDropdownPopover>
//               <CompoundDropdownList>
//                 {groupedNames.map(group => (
//                   <div key={group.label} className="group">
//                     <div className="group__heading">
//                       <div className="custom-group">
//                         <span>{group.label}</span>
//                         <span className="custom-group__badge">
//                           {group.options.length}
//                         </span>
//                       </div>
//                     </div>
//                     <div>
//                       {group.options.map(nestedOption => (
//                         <CompoundDropdownOption
//                           key={nestedOption.value}
//                           option={nestedOption}
//                           isDisabled={nestedOption.isDisabled}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </CompoundDropdownList>
//             </CompoundDropdownPopover>
//           </CompoundDropdown>
//         </div>
//       </div>
//     </main>
//   );
// }
