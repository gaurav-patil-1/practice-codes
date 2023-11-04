import React from "react";

const Count = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
export default Count;
