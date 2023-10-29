---
Arrow Function
---

## What is an Arrow Function?

An arrow function expression is a compact alternative to a traditional function expression.

## Example:

- Traditional Function Expression:
  function sum(a, b) {
  return a + b;
  }

- Arrow Function Expression:
  const sum = (a, b) => a + b;

## Key Differences and Limitations

1. No own bindings for this, arguments, super:

   - Arrow functions don't create their own this, arguments, or super variables. They inherit these from the surrounding code.

2. Not usable as constructors:

   - You can't use new with arrow functions.
   - They don't have access to new.target.

3. Can't be used as generator functions:
   - Arrow functions can't use the yield keyword.

---

                       Syntax Variants

---

() => expression: - No parameters, returns expression.
const hello = () => "Hello, world!";

param => expression: - Single parameter, returns expression.
const square = x => x \* x;

(param) => expression: - Parentheses around single parameter, returns expression.
const square = (x) => x \* x;

(param1, paramN) => expression: - Multiple parameters, returns expression.
const sum = (a, b) => a + b;

() => { statements }: - No parameters, performs statements in the function body.
const logHello = () => { console.log("Hello, world!"); };

param => { statements }: - Single parameter, performs statements in the function body.
const logSquare = x => { console.log(x \* x); };

(param1, paramN) => { statements }: - Multiple parameters, performs statements in the function body.
const logSum = (a, b) => { console.log(a + b); };

---

                      Advanced Syntax

---

1. Rest parameters, default parameters, and destructuring:

   - Parentheses are required for these.
     const sumRest = (a, b, ...rest) => a + b + rest.reduce((acc, x) => acc + x, 0);
     const sumDefault = (a = 1, b = 2) => a + b;
     const sumDestructure = ({ a, b }) => a + b;

2. Async arrow functions:
   - You can use the async keyword to make an arrow function asynchronous.
     const fetchData = async (url) => {
     const response = await fetch(url);
     const data = await response.json();
     return data;
     };

---

1. No own bindings for this, arguments, super

---

Traditional function expressions in JavaScript have their own bindings for this, arguments, and super. This means that inside a regular function, these values are determined based on how the function is called.

In contrast, arrow functions do not create their own this, arguments, or super — they inherit these from the surrounding (non-arrow) code.

## Example with this:

Let's consider an object with a method:

const obj = {
value: "Hello, world!",
traditionalFunction: function() {
console.log(this.value);
},
arrowFunction: () => {
console.log(this.value);
}
};

obj.traditionalFunction(); // Output: "Hello, world!"
obj.arrowFunction(); // Output: undefined

## Explanation:

The traditionalFunction has its own this binding, which refers to obj. The arrowFunction inherits its this from the surrounding code, which is the global scope in this case, so it doesn't have access to obj.value.

---

2. Not usable as constructors

---

Arrow functions can't be used as constructor functions, meaning you can't use the new keyword with them. They also don't have access to the new.target meta-property, which indicates the constructor that was invoked with new.

## Example:

const Traditional = function() {};
const Arrow = () => {};

const obj1 = new Traditional(); // Works fine
const obj2 = new Arrow(); // Throws TypeError: Arrow is not a constructor

## NOTE:

## ---Traditional Function Constructors

Before the ES6 class syntax, constructor functions were written like this:

function Person(name, age) {
this.name = name;
this.age = age;
this.introduce = function() {
return `My name is ${this.name} and I am ${this.age} years old.`;
};
}
const john = new Person("John", 30);
console.log(john.introduce()); // Output: "My name is John and I am 30 years old."

## ---ES6 Class Constructors

ES6 introduced the class syntax, which offers a more intuitive and clean way to define constructor functions:

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

introduce() {
return `My name is ${this.name} and I am ${this.age} years old.`;
}
}
const emily = new Person("Emily", 22);
console.log(emily.introduce()); // Output: "My name is Emily and I am 22 years old."

## ---Inheritance and Super Constructors

In object-oriented programming, a class can inherit properties and methods from another class using the extends keyword. The super keyword is used to call the parent class's constructor:

class Animal {
constructor(name) {
this.name = name;
}

makeSound() {
return "Some generic sound";
}
}

class Dog extends Animal {
constructor(name, breed) {
super(name);
this.breed = breed;
}

makeSound() {
return "Woof";
}
}

const myDog = new Dog("Fido", "Labrador");
console.log(myDog.name); // Output: "Fido"
console.log(myDog.makeSound()); // Output: "Woof"

---

## From Traditional to Arrow Functions

## Step 1: Remove "function" and Add Arrow

First, you remove the function keyword and add an arrow (=>) between the parameters and the opening brace of the function body.

// Traditional
(function(a) {
return a + 100;
});

// Arrow
(a) => {
return a + 100;
};

## Step 2: Remove Braces and "return"

If the function body consists of a single return statement, you can omit the braces and the return keyword. The return is then implied.

// Arrow with implied return
(a) => a + 100;

## Step 3: Remove Parentheses Around Single Parameter

If the function takes a single parameter, you can remove the parentheses around it.

// Final arrow function
a => a + 100;

## Parentheses Requirements:

Parentheses are only optional when there is exactly one simple parameter. If there are multiple parameters, no parameters, or more complex parameters (like default, destructured, or rest parameters), parentheses are required.

(a, b) => a + b + 100; // multiple parameters
() => a + b + 100; // no parameters

## Braces and return Keyword:

If the function body involves more than just a return statement (like variable declarations or additional logic), you need to include the braces as well as the return keyword.

(a, b) => {
const chuck = 42;
return a + b + chuck;
};

## Naming:

Arrow functions are anonymous. If you need to refer to the function inside its body (recursion, for instance), you should use a traditional function or assign the arrow function to a variable.

// Traditional named function
function bob(a) {
return a + 100;
}

// Named arrow function (via variable)
const bob2 = (a) => a + 100;

---

                Expression Body vs. Block Body

---

## What is Expression Body and Block Body?

In arrow functions, you can have either an "expression body" or a "block body".

## Example:

- Expression Body:
  const func = (x) => x _ x;
  // Single expression x _ x is returned implicitly

- Block Body:
  const func2 = (x, y) => {
  return x + y;
  };
  // Explicit "return" needed

---

                Returning Object Literals

---

## What are Returning Object Literals?

When you want to return an object literal, doing it directly with the expression body syntax won't work as you might expect. This is because the curly braces {} are interpreted as a block body.

## Example:

- Incorrect Way:
  const func = () => { foo: 1 };
  // Calling func() returns undefined!

- Correct Way:
  const func = () => ({ foo: 1 });
  // Calling func() will now return { foo: 1 }

## Key Points:

1. Solution: Wrap in Parentheses
   - To return an object literal using arrow function shorthand, you can wrap the object literal in parentheses.

---

                   Arrow Functions as Methods

---

## Arrow Functions as Methods:

Arrow functions don't have their own this context. When used as methods within objects or classes, they can behave differently from traditional functions.

## Example:

"use strict";
const obj = {
i: 10,
b: () => console.log(this.i, this),
c() {
console.log(this.i, this);
},
};
obj.b(); // logs undefined, global object
obj.c(); // logs 10, the object itself

## NOTE:

---Object.defineProperty() Example:
The arrow function used in Object.defineProperty() also inherits this from the global context, causing similar issues:

"use strict";
const obj = {
a: 10,
};
Object.defineProperty(obj, "b", {
get: () => {
return this.a + 10; // 'this' refers to global object
},
});

---

                Arrow Functions in Classes

---

## What is the use of Arrow Functions in Classes?

Arrow functions can be useful in classes for auto-binding the method to the instance. Unlike traditional functions, arrow functions capture the this value of the enclosing context, making them unable to have their this context changed by call(), apply(), or bind().

## Example:

class C {
a = 1;
autoBoundMethod = () => {
console.log(this.a);
};
}
In the above example, autoBoundMethod will always have this pointing to the class instance, irrespective of how it's called.

## NOTE:

"Auto-bound" Methods
You can achieve similar functionality with traditional functions by using .bind(this) in the constructor:

class C {
a = 1;
constructor() {
this.method = this.method.bind(this);
}
method() {
console.log(this.a);
}
}
However, it's worth noting that each instance of the class would create a new function reference, which could lead to increased memory usage.

## Key Points:

1. Auto-bound: In the example, arrowMethod is auto-bound. So, when we extract it from the instance and call it, this.myValue still refers to myInstance.myValue.
2. Instance-specific: Each instance of the class will have its own copy of the arrow function, which can lead to higher memory usage if you have many instances of the class.
3. Not Usable with super: Arrow functions don't have their own this or super. So you can't use super within an arrow function in a class to call a method with the same name in the parent class.
4. Cannot be Overridden: Because arrow function properties are defined on the instance (not the prototype), subclass instances can't easily override these methods.
5. Can't be Called with new: Arrow functions can't be used as constructors. You can't use new with them.
6. Event Handlers and Callbacks: The arrow functions in classes can be particularly useful in event handlers and callbacks where you don't want to manually bind the method to this.

---

       Limitations with call(), apply(), bind()

---

## What are the Limitations with call(), apply(), bind()?

Because arrow functions don't have their own this, methods like call(), apply(), and bind() are not useful for them. These methods can't change the this value of an arrow function.

---

          NOTE (The Object.defineProperty() method)

---

## What is Object.defineProperty() method?

The Object.defineProperty() method in JavaScript allows you to define a new property directly on an object, or modify an existing property on an object, and returns the object. You can specify attributes for the property like enumerable, configurable, and writable, as well as get and set functions for a getter and setter.

## Syntax:

Object.defineProperty(obj, prop, descriptor)

- obj: The object on which to define or modify the property.
- prop: The name or Symbol of the property to be defined or modified.
- descriptor: An object that describes the property attributes.

## Property Descriptor Object:

A descriptor object can have the following keys:

- value: The value associated with the property (default is undefined).
- writable: Whether the value can be changed (default is false).
- enumerable: Whether the property will show up in a for...in loop or Object.keys() (default is false).
- configurable: Whether the property can be deleted or have attributes changed (default is false).
- get: A function serving as a getter (default is undefined).
- set: A function serving as a setter (default is undefined).

## Example 1: Adding a Simple Property

const obj = {};
Object.defineProperty(obj, 'name', {
value: 'John',
writable: true,
enumerable: true,
configurable: true
});
console.log(obj.name); // Output: John

## Example 2: Using Getters and Setters

const person = {};
Object.defineProperty(person, 'fullName', {
get: function() {
return this.firstName + ' ' + this.lastName;
},
set: function(value) {
[this.firstName, this.lastName] = value.split(' ');
},
enumerable: true,
configurable: true
});

person.firstName = 'John';
person.lastName = 'Doe';
console.log(person.fullName); // Output: John Doe

## Example 3: Non-Writable Property

const constantObj = {};
Object.defineProperty(constantObj, 'PI', {
value: 3.14159,
writable: false
});

constantObj.PI = 3.14; // Attempt to change will be ignored
console.log(constantObj.PI); // Output: 3.14159

## Notes:

If you specify a get or set function, writable and value are ignored.
If configurable is set to false, you can't change its descriptor attributes again.

---

                  Usage of Arrow Function

---

---

            Arguments Array Like Object

---

## What is the Arguments Array Like Object?

The arguments object is an array-like object that holds the arguments passed to a function.

## Traditional Function vs Arrow Function with Arguments Object

- Traditional Function:
  In traditional functions, you can access the arguments using the `arguments` object.
  Example:
  function traditionalFunction() {
  console.log(arguments[0]);
  }
  traditionalFunction(1, 2, 3); // Output: 1

- Arrow Function:
  In arrow functions, attempting to access the `arguments` object will result in a ReferenceError.
  Example:
  const arrayMethod = () => {
  console.log(arguments[0]);
  };
  arrayMethod(1, 2, 3); // Output: "Uncaught ReferenceError: arguments is not defined"

## Key Points:

1. The `arguments` object is not available in arrow functions. To use `arguments` in an arrow function, you can rely on rest parameters to collect all the arguments into an array.
2. In traditional functions, the `arguments` object is array-like but not an actual array. It has a `length` property but lacks array methods like `forEach` or `map`.

## What are the Usages of Arrow Function?

1. Empty Arrow Function: An arrow function with no body (an empty function) will return undefined.
   Example:
   const empty = () => {};

2. Immediately Invoked Function Expression (IIFE): Arrow functions can be used in IIFE to execute the function immediately.
   Example:
   (() => "foobar")(); // Returns "foobar"

3. Simple Expressions: Arrow functions can have simple expressions as their body.
   Example:
   const simple = (a) => (a > 15 ? 15 : a);

4. Array Operations: Arrow functions are useful for array operations like map, filter, and reduce.
   Example:
   const sum = arr.reduce((a, b) => a + b);

## Using Arrow Functions for Context Preservation

Problem 1:
Arrow functions can be helpful when you want to preserve the this context, such as in callbacks like setTimeout() or event listeners.

- Traditional Function Issue:
  const obj = {
  count: 10,
  doSomethingLater() {
  setTimeout(function () {
  this.count++; // `this` refers to global or undefined, not `obj`
  console.log(this.count);
  }, 300);
  },
  };
  obj.doSomethingLater(); // Logs "NaN" or throws error in strict mode

- Arrow Function Solution:
  const obj = {
  count: 10,
  doSomethingLater() {
  setTimeout(() => {
  this.count++; // `this` refers to `obj` as arrow functions don't have their own `this`
  console.log(this.count);
  }, 300);
  },
  };
  obj.doSomethingLater(); // Logs "11"

## Problem 2: this in Nested Functions

In object methods with nested traditional functions, this does not behave as one might expect.

- Traditional Function Issue:
  const person = {
  name: 'John',
  hobbies: ['reading', 'traveling'],
  printHobbies: function() {
  this.hobbies.forEach(function(hobby) {
  // `this` is not the `person` object in this context
  console.log(`${this.name} likes ${hobby}`);
  });
  }
  };
  person.printHobbies(); // Output: "undefined likes reading", "undefined likes traveling"

- Solution:
  const person = {
  name: 'John',
  hobbies: ['reading', 'traveling'],
  printHobbies: function() {
  const self = this; // saving `this`
  this.hobbies.forEach(function(hobby) {
  console.log(`${self.name} likes ${hobby}`); // using `self` instead of `this`
  });
  }
  };
  person.printHobbies(); // Output: "John likes reading", "John likes traveling"
