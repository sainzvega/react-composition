import React, { useState } from "react";
import "./index.css";

import BeginExample from "./components/BeginExample";
import FinalExample from "./components/FinalExample";
import NavTabs from "./components/NavTabs";

const routerTable = {
  "Basic Dropdown": {
    routeName: "basic-dropdown",
    description: "Basic component functionality.",
    example: BeginExample
  },
  "Grouped Dropdown": {
    routeName: "grouped-dropdown",
    description: "Grouped component functionality",
    example: FinalExample
  }
};

export default function App() {
  const [currentRouteData, setCurrentRouteData] = useState(
    routerTable["Basic Dropdown"]
  );

  const routes = Object.keys(routerTable);
  const CurrentRouteComponent = currentRouteData.example;

  function handleNavClick(routeName) {
    setCurrentRouteData(routerTable[routeName]);
  }

  return (
    <div className="App">
      <NavTabs routes={routes} onClick={handleNavClick} />
      <div className="Description">
        <p>{currentRouteData.description}</p>
      </div>
      <div className="Example">
        {CurrentRouteComponent && <CurrentRouteComponent />}
      </div>
    </div>
  );
}
