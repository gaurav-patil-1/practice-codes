import React, { useState, useEffect } from "react";

const HooksPattern = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(`User Typed : ${input}`);
  }, [input]);
  return (
    <>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      {input}
    </>
  );
};

export default HooksPattern;
