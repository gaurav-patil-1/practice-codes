import React from "react";
import Hello from "./Components/Hello";
import UseRef from "./Components/UseRef/UseRef";
import UseEffect from "./Components/UseEffect/UseEffect";
import UseState from "./Components/UseState/UseState";

const App = () => {
  return (
    <div>
      <Hello />
      <UseRef />
      <UseEffect />
      <UseState />
    </div>
  );
};

export default App;
