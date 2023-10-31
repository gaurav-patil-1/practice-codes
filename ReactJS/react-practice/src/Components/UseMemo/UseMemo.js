import { useState, useMemo } from "react";

//performance issue ---> wihout using useMemo :
// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   //   const calculation = expensiveCalculation(count);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);
//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count :{count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation : </h2>
//         {calculation}
//       </div>
//     </>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1;
//   }
//   return num;
// };

//e.g.2 :

function expensiveCalculation1(input) {
  console.log("Running expensive calculation...");
  // Simulate an expensive computation
  let output = 0;
  for (let i = 0; i < 100000000; i++) {
    output += Math.random();
  }
  return input * output;
}

const UseMemo = () => {
  const [input, setInput] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const memoizedValue = useMemo(() => {
    return expensiveCalculation1(input);
  }, [input]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Memoized Value: {memoizedValue}</p>
      <input
        type="number"
        value={otherState}
        onChange={(e) => setOtherState(Number(e.target.value))}
      />
      <p>Another State: {otherState}</p>
    </div>
  );
};

// In this example, changing input will trigger the expensive
// calculation, but changing otherState will not, thanks to useMemo.
// This can significantly improve performance by avoiding unnecessary recalculations

export default UseMemo;
