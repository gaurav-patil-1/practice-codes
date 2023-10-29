//Common Syntax
const sum = (a, b) => a + b;

const sum2 = (a, b, c) => {
  return a + b + c;
};

//returning object literal
const obj = () => ({ name: "Gaurav" });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Advance Syntax

const sumRest = (a, b, ...rest) => a + b + rest.reduce((acc, x) => acc + a, 0);

const sumDefault = (a = 10, b = 20) => a + b;

const sumDestructure = ({ x, y }) => x + y;
