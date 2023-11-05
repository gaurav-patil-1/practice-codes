import React, { useState, createContext, useContext } from "react";

const TabContext = createContext();

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabContext.Provider>
  );
};

const TabList = ({ children }) => {
  return <div>{children}</div>;
};

const Tab = ({ index, children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabContext);
  const isActive = index === activeIndex;

  return (
    <button
      onClick={() => setActiveIndex(index)}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      {children}
    </button>
  );
};

const TabPanels = ({ children }) => {
  const { activeIndex } = useContext(TabContext);
  return <div>{children[activeIndex]}</div>;
};

const TabPanel = ({ children }) => <div>{children}</div>;

// Usage
const CompoundPattern = () => (
  <Tabs>
    <TabList>
      {/* These Tab components now have an index prop that indicates their position */}
      <Tab index={0}>Tab 1</Tab>
      <Tab index={1}>Tab 2</Tab>
      <Tab index={2}>Tab 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content of Tab Panel 1</TabPanel>
      <TabPanel>Content of Tab Panel 2</TabPanel>
      <TabPanel>Content of Tab Panel 3</TabPanel>
    </TabPanels>
  </Tabs>
);

export default CompoundPattern;
