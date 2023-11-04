import React, { useState, useEffect } from "react";
import "./Styles.css";

import Count from "./Count";
import Width from "./Width";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return { count, increment, decrement };
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const CustomHook2 = () => {
  const counter = useCounter();
  const width = useWindowWidth();
  return (
    <div className="CustomHook2">
      <Count {...counter} />
      <div id="divider" />
      <Width width={width} />
    </div>
  );
};

export default CustomHook2;
