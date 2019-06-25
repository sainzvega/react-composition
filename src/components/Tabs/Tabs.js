import React, { useState, createContext, useContext, Children } from "react";
import classNames from "classnames";
import "./Tabs.css";

// The Tabs will be broken down into several components which will all be individually exported.
// The user of the tabs is now resposble for how tabs render (see example @ bottom). This is
// the power behind composition. It is essentially inversion of control for rendering.
// This allows us to simplify the number of props that need to be passed into the top level component
// and move them to a more appropriate level (i.e. disabled prop is now a part of the <Tab/> component).

const TabsContext = createContext(); // context is used to prevent prop drilling between the compound component

export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // Context at top level means any descendant can have access to the activeIndex state (i.e <Tab /> for active tab handling)
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {/* The children prop is what makes component composition possible. 
          I like to think of it as a pass through for rendering (defer my rendering to whatever is inside the closing tags)    
       */}
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

const TabContext = createContext(); // You can create multiple contexts at different levels.
export function TabList({ children, wrap }) {
  const wrappedChildren = Children.map(children, (child, index) => (
    <TabContext.Provider value={index}>{child}</TabContext.Provider>
  ));
  return (
    <div
      className={classNames({
        tabs__list: true,
        "tabs__list--wrap": wrap
      })}
    >
      {wrappedChildren}
    </div>
  );
}

// This is a helper function that allows you to expose onClick, onChange, onEtc..props
// from your component. It is useful when you want to let users hook into those events
// but also run some logic that your component requires (i.e.Tab handleClick below)
function wrapEvent(externalHandler, internalHandler) {
  return event => {
    externalHandler && externalHandler(event);
    if (!event.defaultPrevented) {
      internalHandler(event);
    }
  };
}

export function Tab({ children, onClick, isDisabled, ...rest }) {
  // Note the isDisabled prop is here, not on top level component
  const index = useContext(TabContext);
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;

  function handleClick() {
    if (isDisabled) {
      return;
    }
    setActiveIndex(index);
  }

  return (
    <div
      className={classNames({
        tabs__tab: true,
        active: isActive,
        disabled: isDisabled
      })}
      onClick={wrapEvent(onClick, handleClick)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
  return <div className="tabs__panel">{children[activeIndex]}</div>;
}

export function TabPanel({ children }) {
  return children;
}
