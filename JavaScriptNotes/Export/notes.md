---
Export
---

## What is Export?

The export keyword in JavaScript is used for exporting values from a module so that they can be imported into other modules.

## What Can Be Exported?

- Variables (let, const, var)
- Functions
- Classes
- Generator functions

---

---

                    Export Syntax

---

## Basic Syntax (Named Exports):

// Exporting variables
export let name1, name2;
export const name1 = 1, name2 = 2;

// Exporting functions
export function functionName() { /_ … _/ }

// Exporting classes
export class ClassName { /_ … _/ }

// Exporting generator functions
export function* generatorFunctionName() { /* … \*/ }

## Exporting Destructured Variables:

// Destructuring from an object and exporting
export const { name1, name2: bar } = obj;

// Destructuring from an array and exporting
export const [ name1, name2 ] = array;

## Export List (Listed Exports):

// Explicit export list
export { name1, name2 };

// Renaming exports
export { variable1 as name1, variable2 as name2 };

//
export { name1 as default /_, … _/ };

## Aggregating Modules:

// Re-export all exports of another module
export \* from "module-name";

// Re-export, but rename to avoid naming conflicts
export \* as name1 from "module-name";

// Selective re-export
export { name1, name2 } from "module-name";

## Note:

1. We can declare the module exports x even before the name x is declared.
   e.g. export {x};
   const x=10;

2. Names for export declarations must be distinct from each other. Having exports with duplicate names or using more than one default export will result in a SyntaxError and prevent the module from being evaluated.

---

                        Hoisting

---

## What is Hoisting?

Hoisting is a behavior in which function declarations and variable declarations are moved to the top of their containing scope during the compilation phase, before code execution begins. However, only the declarations themselves are hoisted, not the initializations.

## In the Context of Export Default:

// This will work because 'foo' is hoisted
foo();
export default function foo() {
console.log("Hi");
}

## Note:

In this code, the function foo is declared and exported as a default export. Even though the function call foo() appears before the function declaration in the code, it still works. This is because foo is hoisted to the top of its scope.

## Counter Example:

// This will NOT work
bar(); // ReferenceError: Cannot access 'bar' before initialization
const bar = function() {
console.log("Hi");
};

## Functions and Classes Can Also Be Anonymous:

export default function() {
console.log("Hi");
}

---

               Importing Default Exports

---

## What is Importing Default Exports?

When you import a default export, you're free to name it whatever you'd like.

## Example:

// file test.js
const k = 12;
export default k;

// some other file
import m from "./test";
console.log(m); // Output: 12

## Note:

The variable k is the default export in test.js. In another file, we import it and name it m. The name doesn't have to match the original name (k in this case).

---

              Renaming Named Exports

---

## What is Renaming Named Exports?

You can rename named exports when you're exporting them to avoid conflicts.

## Example:

export { myFunction as function1, myVariable as variable };

---

       Using String Literals for Naming

---

## What is Using String Literals for Naming?

If you need to export something under a name that is not a valid JavaScript identifier, you can use a string literal.

## Example:

export { myFunction as "my-function" };

---

               Basic Re-Exporting

---

## What is Basic Re-Exporting?

Basic Re-Exporting is when you want to make exports from one module available in another module without utilizing them.

## Example:

// bar.js
export default function1() {
console.log("I am the default function");
}
export function function2() {
console.log("I am function2");
}

// index.js
export { default as function1, function2 } from "bar.js";

## Note:

So when we say index.js is "re-exporting," we mean it's taking exports from bar.js and immediately offering them up as its own exports, without utilizing them in any way. This allows other modules to import these functions directly from index.js.

---

        Different Re-Exporting Syntax

---

## Different Re-export Syntaxes:

Most "import from" syntaxes have "export from" counterparts, including:

- export { x } from "mod";
- export { x as v } from "mod";
- export \* as ns from "mod";

---

           Handling Duplicate Names

---

## What Happens with Duplicate Names?

The wildcard \* can be used to re-export all named exports from another module, but if multiple modules re-export the same name, it becomes undefined.

## Example:

// -- mod1.js --
export const a = 1;

// -- mod2.js --
export const a = 3;

// -- barrel.js --
export _ from "./mod1.js";
export _ from "./mod2.js";

// -- main.js --
import \* as ns from "./barrel.js";
console.log(ns.a); // undefined

## Note:

Attempting to import a duplicate name will result in a SyntaxError.

---

           Invalid Re-Export Syntax

---

## What is Invalid Re-Export Syntax?

Certain re-export syntaxes are invalid and will result in errors.

## Invalid Example:

export DefaultExport from "bar.js"; // Invalid

## Correct Ways to Re-Export:

- export { default as DefaultExport } from "bar.js";
- export { default, function2 } from "bar.js";
