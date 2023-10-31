//Practicing.....

import React, { useState, useCallback } from "react";
import Todos from "./Todos";
const UseCallback = () => {
  //   const myMemoizedFunction = useCallback(() => {}, [dependency1, dependenc2]);
  //   return <></>;
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
    <>
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
