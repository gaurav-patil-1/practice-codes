// Hoisting is a JavaScript mechanism where variable and function declarations
// are moved to the top of their containing scope during the compilation phase

foo();

export default function foo() {
  console.log("Hello World");
}

temp(); // this will throw error as it is funtion expression not a declaration
const temp = function app() {
  console.log("My App");
};
