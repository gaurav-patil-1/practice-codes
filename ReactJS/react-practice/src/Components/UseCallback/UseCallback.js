// we can use the useCallback hook to prevent the function from being recreated unless necessary.
// Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:

import React, { useState, useCallback } from "react";
import Todos from "./Todos";
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);
  return (
    <>
      {console.log("rendered")}
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallback;
