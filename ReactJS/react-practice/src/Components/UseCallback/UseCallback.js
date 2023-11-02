// we can use the useCallback hook to prevent the function from being recreated unless necessary.
// Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:

import React, { useState, useCallback, useMemo } from "react";
import Todos from "./Todos";
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //I've used useMemo here which is used to memoize the values like it even memoize function resuls based on parameters,
  //I've created an empty object here and memoized with the help of useMemo and as 2nd parameter I've passed an empty dependency array
  //so that it'll memoize it's value on first render only
  const obj = useMemo(() => ({}), []);
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
      <Todos objt={obj} todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallback;
