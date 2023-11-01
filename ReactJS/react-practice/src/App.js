import React from "react";
import Hello from "./Components/Hello";
// import UseRef from "./Components/UseRef/UseRef";
// import UseEffect from "./Components/UseEffect/UseEffect";
// import UseState from "./Components/UseState/UseState";
import UseCallback from "./Components/UseCallback/UseCallback";
import UseMemo from "./Components/UseMemo/UseMemo";

const App = () => {
  return (
    <div>
      <Hello />
      {/* <UseRef /> */}
      {/* <UseEffect /> */}
      {/* <UseState /> */}
      <UseCallback />
      <UseMemo />
    </div>
  );
};

export default App;
