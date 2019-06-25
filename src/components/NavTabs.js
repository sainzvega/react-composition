import React from "react";
import { Tabs, TabList, Tab } from "./Tabs";

// This makes use of the Tabs crated in the Tabs-Flexible example, but
// exposes a more usable API for the Navigation Links used by the mock
// router we created.
function NavTabs({ routes, onClick }) {
  return (
    <Tabs>
      <TabList wrap>
        {routes.map((route, i) => (
          <Tab key={i} onClick={() => onClick(route)}>
            {route}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}

export default NavTabs;
