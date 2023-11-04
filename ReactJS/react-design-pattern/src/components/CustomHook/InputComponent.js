import React, { useState, useEffect } from "react";
import useKeyPress from "./useKeyPress";

const InputComponent = () => {
  const [input, setInput] = useState("");
  const qPressed = useKeyPress("q");
  const wPressed = useKeyPress("w");
  const lPressed = useKeyPress("l");
  useEffect(() => {
    console.log("User Pressed Q");
  }, [qPressed]);
  useEffect(() => {
    console.log("User Pressed W");
  }, [wPressed]);
  useEffect(() => {
    console.log("User Pressed L");
  }, [lPressed]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        placeholder="Type Something"
      />
    </>
  );
};

export default InputComponent;
