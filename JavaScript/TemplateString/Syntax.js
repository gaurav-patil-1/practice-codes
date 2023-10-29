//Template literals are a way to define string literals in JavaScript,
//but they offer more functionality than traditional string literals, which use single or double quotes

//Simple String :
console.log(`Hello World`);

//Multi-Line String
console.log(`I'm Gaurav Patil
I'm 22 years old`);

//String with expression
const myName = "Gaurav";
console.log(`Hi I'm ${myName}`);

//Tagged Template Literal

function myTag(strings, ...expr) {
  return `${strings[0]}${expr[0]}`;
}
let result = myTag`My Name is ${myName}`;
console.log(result);
