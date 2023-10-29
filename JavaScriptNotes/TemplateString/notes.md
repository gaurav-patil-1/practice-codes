---
Template Literals in JavaScript
---

--- What are Template Literals?
Template literals are a way to define string literals in JavaScript. Unlike traditional string literals that use single or double quotes, template literals are enclosed in backticks (`).

--- Key Features

1. Multi-line Strings: Enables the creation of multi-line strings without needing escape characters like \n.
2. String Interpolation: Allows for embedding expressions inside the string that will be evaluated when the string is created.
3. Tagged Templates: Can be tagged with a function that processes both the string and the embedded expressions.

--- Syntax

1. Simple String
   `string text`
   Works just like a traditional string, enclosed in backticks.

2. Multi-line String
   `string text line 1
string text line 2`
   No need to use escape characters (\n) for a new line, just press Enter.

3. String with Expressions
   `string text ${expression} string text`
   The ${expression} will be evaluated and its value will be embedded in the string.

4. Tagged Template Literal
   tagFunction`string text ${expression} string text`
   tagFunction is a function that manipulates the string and expressions.

## Examples:

1. Simple String

const simple = `Hello, World!`;

2. Multi-line String

const multi = `Hello,
World!`;

3. String with Expressions

const name = 'Gaurav';
const greeting = `Hello, \${name}!`;

4. Tagged Template Literal

function tag(strings, ...values) {
return strings[0] + values[0].toUpperCase() + strings[1];
}

const name = 'world';
const str = tag\`Hello \${name}\`;
// Output will be "Hello WORLD"

## Parameters:

- string text: This is the string content. Almost all characters are allowed, including line breaks and whitespace.

- expression: This is a JavaScript expression that will be evaluated, and its value will be converted to a string or passed to tagFunction.

- tagFunction: If specified, it gets called with two arguments:

  - An array of all the string parts
  - The evaluated expressions

  The return value of this function will become the new value of the template literal.

---

                   Template Literals in JavaScript

---

## Description:

1. Enclosure: Template literals use backticks (\`) instead of single (') or double (") quotes to enclose strings.

2. Placeholders: Within a template literal, you can embed expressions using \${expression}. These are called placeholders.

3. Default Function: If you don't supply your own tag function, JavaScript uses a default one that simply replaces placeholders with their corresponding values and joins all the strings together.

4. Tagged Templates: If you provide a function right before the template literal (e.g., myFunction in myFunctionHello \${name}\`), that function will process the template literal. This is known as a tagged template.

5. Escaping Characters:

   - Backticks in the string can be escaped using a backslash (\`) before the backtick.
   - Dollar signs can also be escaped to prevent them from being treated as a part of a placeholder.

## Examples:

--- Escaping Backticks

1. To include an actual backtick within a template literal, you can escape it with a backslash.

console.log(\`\` === "\`"); // Output: true

--- Escaping Dollar Sign 2) If you need a string to contain \${1} and not treat it as an expression placeholder, you can escape the dollar sign.

console.log(\`\${1}\` === "\${1}"); // Output: true

In summary, template literals offer a more versatile way to work with strings in JavaScript, allowing for easier multi-line strings, interpolation, and custom processing through tag functions. The escaping rules let you include characters that might otherwise conflict with these features.

## Multi-line Strings in Traditional JavaScript:

In traditional JavaScript strings, which use single or double quotes, you would have to manually insert a newline character (\n) to create multi-line strings. For example:

console.log("string text line 1\n" + "string text line 2");

## Multi-line Strings using Template Literals:

Template literals make it much easier to define multi-line strings. You can simply write the string across multiple lines within the backticks, and the newlines will be part of the resulting string. For example:

console.log(\`string text line 1
string text line 2\`);

This will produce the exact same multi-line output as the traditional example:

string text line 1
string text line 2

As you can see, template literals are far more readable and convenient when you need to define multi-line strings.

---

                   Template Literals in JavaScript

---

## Description:

1. Enclosure: Template literals use backticks (\`) instead of single (') or double (") quotes to enclose strings.

2. Placeholders: Within a template literal, you can embed expressions using \${expression}. These are called placeholders.

3. Default Function: If you don't supply your own tag function, JavaScript uses a default one that simply replaces placeholders with their corresponding values and joins all the strings together.

4. Tagged Templates: If you provide a function right before the template literal (e.g., myFunction in myFunctionHello \${name}\`), that function will process the template literal. This is known as a tagged template.

5. Escaping Characters:

   - Backticks in the string can be escaped using a backslash (\`) before the backtick.
   - Dollar signs can also be escaped to prevent them from being treated as a part of a placeholder.

## String Interpolation:

--- Traditional Way: Using Addition Operator +
In the old way, you concatenate strings and expressions using the + operator. This can be cumbersome and hard to read when you have multiple expressions.

const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 \* a + b) + ".");

--- Modern Way: Using Template Literals
Template literals simplify this by allowing you to embed expressions directly into strings using \${expression}.

const a = 5;
const b = 10;
console.log(`Fifteen is \${a + b} and
not \${2 * a + b}.`);

Note:

- Addition Operator: When using +, the operands are first converted to primitives before the operation. This can sometimes lead to unexpected behavior.

- Template Literals: In the case of template literals, the expressions inside \${} are directly coerced to strings. This usually makes their behavior more predictable when dealing with different data types.

## Nesting in Template Literals:

Nesting in template literals allows you to embed a template literal within another template literal. This is particularly useful for making complex string manipulations more readable.

--- Without Nested Template Literals:

const timeOfDay = "morning"; // This could be "morning", "afternoon", or "evening"

const greeting = `Good ${timeOfDay === "morning" ? "morning" : timeOfDay === "afternoon" ? "afternoon" : "evening"}, User!`;

--- With Nested Template Literals:

const timeOfDay = "morning"; // This could be "morning", "afternoon", or "evening"

const greeting = `Good \${timeOfDay === "morning" 
  ? "morning" 
  : \` \${timeOfDay === "afternoon" ? "afternoon" : "evening"}\`
}, User!`;

## Tagged Templates in JavaScript:

Tagged templates in JavaScript are an advanced form of template literals that allow you to customize how template literals are processed. By using a tag function, you can control the behavior of a template literal in ways that go beyond simple string substitution.

Anatomy of a Tag Function:
A tag function takes one or more arguments:

- The first argument is an array of all the static strings in the template literal. These are the parts that don't change.
- The remaining arguments are the evaluated expressions from the placeholders \${...} in the template literal.

Here's a simple example:

function myTag(strings, personExp, ageExp) {
// strings = ["That ", " is a ", "."]
// personExp = "Mike"
// ageExp = 28

const ageStr = ageExp > 99 ? "centenarian" : "youngster";

return \`${strings[0]}\${personExp}\${strings[1]}\${ageStr}\${strings[2]}\`;
}

// alternate way: function myTag(strings, ...expression) {};

## Raw Strings in Tagged Templates:

The raw property is available on the first argument of the tag function. This property allows you to get the "raw" form of the strings in the template literal—meaning you'll get the strings exactly as they are entered, without any processing of escape sequences.

e.g. :
function tag(strings) {
console.log(strings.raw[0]);
}

tag\`string text line 1 \\n string text line 2\`;

String.raw() Method:
JavaScript also provides a String.raw() method that can be used to create raw strings. It works similarly to how a default tag function would work when a template literal does not contain any escape sequences.

const str = String.raw\`Hi\\n\${2 + 3}!\`;
// "Hi\\\\n5!"
