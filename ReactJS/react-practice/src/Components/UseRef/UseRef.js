import React, { useState, useRef, useEffect } from "react";

// const UseRef = () => {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1;
//   });
//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count : {count.current}</h1>
//     </>
//   );
// };
// const UseRef = () => {
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </>
//   );
// };

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h4>Current Value : {inputValue}</h4>
      <h4></h4>
      <h4></h4>
    </>
  );
};

export default UseRef;
