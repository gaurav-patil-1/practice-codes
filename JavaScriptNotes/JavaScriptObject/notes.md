---
JavaScript Object
---

## What is a JavaScript Object?

In JavaScript, almost "everything" is an object. Booleans, Numbers, Strings can be objects (if defined with the new keyword). Dates, Maths, Regular, Arrays, Functions, Objects are always objects.

## Example:

const person = {
name: "Gaurav",
age: 22,
city: "Bangalore",
};

---

                    Object Properties

---

## What are Object Properties?

- It's the named values in JavaScript objects.
- Object properties can be both primitive values, other objects, and functions.
- Properties can usually be changed, added, and deleted, but some are read only.

---

                      Object Methods

---

## What are Object Methods?

- Methods are actions that can be performed on objects.
- An object method is an object property containing a function definition.

---

               Creating a JavaScript Object

---

## Ways to Create a JavaScript Object:

1. Create a single object, using an object literal
2. Create a single object, with the keyword new
3. Define an object constructor, and then create objects of the constructed type
4. Create an object using Object.create()

## Examples:

- Using object literal:
  const person = {
  name: "Gaurav",
  age: 22,
  city: "Bangalore",
  };
- Using keyword new:
  const team = new Object();
  team.name = "FC Barcelona";
- Using object constructor:
  function createObj(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
  }
- Using Object.create():
  const objectPrototype = {
  name: "Gaurav",
  age: 22,
  };
  const temp1 = Object.create(objectPrototype);

---

            Accessing JavaScript Object Properties

---

## How to Access Object Properties?

- With dot notation
- With bracket notation
- With expression

## Examples:

const person = {
name: "Gaurav",
age: 22,
city: "Bangalore",
};
console.log(person.name); // Output: Gaurav
console.log(person['name']); // Output: Gaurav
console.log(person[name]); // Output: Gaurav

---

               JavaScript for...in Loop

---

## What is for...in Loop?

The loop will iterate over each property and assign its property name to a variable.

## Example:

const laLiga = {
team1: "FC Barcelona",
team2: "Real Madrid",
team3: "Atletico Madrid",
team4: "Athletic Club",
team5: "Valencia",
team6: "Villarreal",
team7: "Sevillia",
};

for (let variable in laLiga) {
console.log(laLiga[variable]);
}

---

               Adding New Properties

---

## How to Add New Properties?

person.nationality = "English";

---

               Deleting Properties

---

## How to Delete Properties?

delete is the keyword that we use to delete the properties of the object.

## Example:

const employee = {
name: "Gaurav Patil",
age: 22,
company_name: "Catchpoint",
city: "Bangalore",
country: "India",
};

delete employee.country;
// or delete employee["country"];

console.log(employee);

---

                    Nested Objects

---

## What are Nested Objects?

Values in an object can be another object.

## Example:

const person = {
name: "Mayur",
cars: {
car1: "BMW",
car2: "Mercedes",
car3: "Porsche",
car4: "Audi",
},
};

// Different ways to access members of nested object
console.log(person.cars.car1);
console.log(person.cars["car2"]);
console.log(person["cars"]["car3"]);

---

           Nested Arrays and Objects

---

## What are Nested Arrays and Objects?

Values in objects can be arrays, and values in arrays can be objects.

## Example:

const obj = {
name: "Gaurav",
hobbies: [
{ title: "football", data: ["a", "b", "c"] },
{ title: "cricket", data: ["d", "e", "f"] },
{ title: "trekking", data: ["g", "h", "i"] },
],
};

for (let i in obj.hobbies) {
console.log(`${obj.hobbies[i].title}`);
for (let j in obj.hobbies[i].data) {
console.log(`${obj.hobbies[i].data[j]}`);
}
}

---

            JavaScript Object Methods

---

## What are JavaScript Object Methods?

Operations that can be performed on JavaScript objects.

## Example:

const emp = {
fname: "Gaurav",
lName: "Patil",
companyName: "Catchpoint",
city: "Bangalore",
func() {
return `${this.fname} ${this.lName}`;
},
};

const temp = emp.func();
console.log(temp);

---

                     What is this?

---

## What is this keyword?

- In JavaScript, the `this` keyword refers to an object.
- Which object depends on how `this` is being invoked (used or called).
- `this` is not a variable. It is a keyword. We cannot change the value of `this`.

---

           Accessing Object Methods

---

## How to Access Object Methods?

const temp = emp.func();

If we try to access the method without using `()`, then it'll return the function definition.

const temp = emp.func;
console.log(temp);

---

          Adding a Method to an Object

---

## How to Add a Method to an Object?

const person = {
fName: "Gaurav",
lName: "Patil",
};

person.func = function () {
return `${this.fName} ${this.lName}`;
};

console.log(person.func());

---

                  JavaScript Display Objects

---

## What are JavaScript Display Objects?

JavaScript display objects are used to interact with or manipulate HTML elements. The properties of an object can be displayed as a string, collected in a loop, displayed using Object.values(), or converted to JSON string using JSON.stringify().

## Examples:

- Display properties as a string:

  ```javascript
  <p id="demo"></p>
  <script>
      const person={
          fName:"Gaurav",
          lName:"Patil",
          address:"Bangalore"
      }
      document.getElementById("demo").innerHTML=person.fName+" "+person.lName;
  </script>
  ```

- Collect properties in a loop:

  ```javascript
  <p id="demo"></p>
  <script>
      const person={
          name:"Gaurav",
          age:22,
          city:"Bangalore"
      };
      let txt="";
      for(let x in person){
          txt+=`${person[x]} `
      };
      document.getElementById("demo").innerHTML=txt;
  </script>
  ```

- Using Object.values():

  ```javascript
  <p id="demo"></p>
  <script>
      const person={
          name:"Gaurav",
          age:22,
          city:"Bangalore"
      };
      const txt=Object.values(person);
      document.getElementById("demo").innerHTML=txt;
  </script>
  ```

- Using JSON.stringify():
  ```javascript
  <p id="demo"></p>
  <script>
      const person={
          name:"Gaurav",
          age:22,
          city:"Bangalore",
          today:new Date(),
          func:function(){return "Hello Worlds";}
      };
      person.func=person.func.toString();
      const txt=JSON.stringify(person);
      document.getElementById("demo").innerHTML=txt;
  </script>
  ```
  Output:
  ```
  {"name":"Gaurav","age":22,"city":"Bangalore","today":"2023-10-27T11:48:59.595Z","func":"function(){return \"Hello Worlds\";}"}
  ```

## Key Points:

1. JSON.stringify() converts date objects and functions into strings.
2. Using Object.values() returns an array of object's enumerable property values.
3. Looping through object properties allows more customized output.

---

                     Stringify Arrays

---

## What is Stringify for Arrays?

It is possible to stringify JavaScript arrays using JSON.stringify().

## Example:

const arr = ["John", "Peter", "Sally", "Jane"];
let myString = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;

Output:
["John","Peter","Sally","Jane"]

---

             JavaScript Object Accessors

---

## What are JavaScript Object Accessors?

JavaScript Object Accessors are special kind of properties that provide a way to get and set values via getter and setter methods.

## Examples:

- JavaScript Getter:
  ```javascript
  const person = {
    fName: "Gaurav",
    lName: "Patil",
    get data() {
      return this.fName;
    },
  };
  console.log(person.data);
  ```
- JavaScript Setter:
  ```javascript
  const obj = {
    title: "Book",
    get lang() {
      return this.title;
    },
    set lang(title) {
      this.title = title;
    },
  };
  obj.lang = "TV";
  console.log(obj.lang);
  ```

## Key Points:

1. Getters and setters are properties, not methods, so you can't use () with them.
2. JavaScript can secure better data quality when using getters and setters.
3. Using getters and setters gives a simpler syntax and allows equal syntax for properties and methods.
4. Useful for doing things behind-the-scenes.

---

                  Object.defineProperty()

---

## What is Object.defineProperty()?

Object.defineProperty() is used to add new properties to an object or modify existing ones. The method provides a way to precisely define or modify properties with more control over their behavior.

## Examples:

```javascript
const num = {
  counter: 0,
};

Object.defineProperty(num, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(num, "increment", {
  get: function () {
    ++this.counter;
  },
});
Object.defineProperty(num, "decrement", {
  get: function () {
    --this.counter;
  },
});
num.increment;
num.increment;
num.increment;
console.log(num.counter); // Output: 3
num.decrement;
num.decrement;
console.log(num.counter); // Output: 1
num.reset;
console.log(num.counter); // Output: 0
```

---

                 Adding a Method to a Constructor

---

## Example:

function employee(fName, lName, id, age, address, companyName) {
this.fName = fName;
this.lName = lName;
this.id = id;
this.age = age;
this.address = address;
this.companyName = companyName;
this.display = function() {
return `Name: ${this.fName} ${this.lName}\nId: ${this.id}\nAge: ${this.age}\nAddress: ${this.address}\nCompany Name: ${this.companyName}`;
};
}

## Key Points:

- We can't add a new property to an object constructor.

---

                  JavaScript Object Prototypes

---

## What are JavaScript Object Prototypes?

- The JavaScript prototype property allows you to add new properties to object constructors.

## Example:

employee.prototype.languageKnown = "English";

## Key Points:

- Prototype property allows adding new properties and methods to object constructors.

---

                    JavaScript Iterables

---

## What are JavaScript Iterables?

- Objects that can be iterated over using `for...of` loop.

## Example:

e.g.1)
const x = "Catchpoint";
for (let a of x) {
console.log(a);
}

e.g.2)
const y = ["Barcelona", "Real Madrid", "Atletico Madrid"];
for (let a of y) {
console.log(a);
}

## Key Points:

- Iterables can be strings, arrays, and other objects that define their iteration behavior.

---

                      JavaScript Sets

---

A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.

## Method Description

new Set() Creates a new Set
add() Adds a new element to the Set
delete() Removes an element from a Set
has() Returns true if a value exists
clear() Removes all elements from a Set
forEach() Invokes a callback for each element
values() Returns an Iterator with all the values in a Set
keys() Same as values()
entries() Returns an Iterator with the [value,value] pairs from a Set

## Example:

// Create empty set and initialize it with some values
const temp = new Set();
const letters = new Set(["a", "b", "c"]);

// add() method to add values to a set
temp.add("A");
temp.add("B");
temp.add("C");
temp.add("A"); // No duplicate elements are allowed

## Examples for JavaScript Sets:

// Invokes a callback for each element in the Set
let txt = "";
temp.forEach((x) => {
txt += x;
});
console.log(txt);

// Returns an iterator object with all the values in the Set
const myValues = temp.values();

let text = "";
for (const x of myValues) {
text += x;
}
console.log(text);

// Since Set doesn't have keys, keys() returns an iterator with values, similar to the values() method
let mykeys = temp.keys();

// entries() returns key-value pairs, but since Set doesn't have keys, it returns [value, value] pairs
const myEntries = temp.entries();

// To delete a value from the Set; returns true on successful deletion and false if the element is not present
temp.delete("A");

// To check whether an element is present in the Set; returns true if present and false otherwise
temp.has("B");
console.log(temp.has("B"));

// To delete all elements from the Set
temp.clear();

---

                      JavaScript Maps

---

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

## Methods:

// 1) new Map(): Creates a new Map object.
const myMap = new Map();

// 2) set(): Sets the value for a key in a Map.
myMap.set("key1", "FC Barcelona");
myMap.set("key2", "Atletico Madrid");
myMap.set("key3", "Athletic Club");
myMap.set("key4", "Villarreal");

// 3) get(): Gets the value for a key in a Map
const value = myMap.get("key1");
console.log(value);

// 4) delete(): Removes a Map element specified by a key.
myMap.delete("key4");

// 5) has(): Returns true if a key exists in a Map.
myMap.has("key3");

// 6) forEach(): Invokes a callback for each key/value pair in a Map.
myMap.forEach((value, key) => {
console.log(`Key : ${key} : Value : ${value}`);
});

// 7) entries(): Returns an iterator object with the [key, value] pairs in a Map.
for (const [key, value] of myMap.entries()) {
console.log(`Key : ${key} : Value : ${value}`);
}

// 8) keys(): Returns an iterator object with the keys in a Map.
for (const k of myMap.keys()) {
console.log(k);
}

// 9) values(): Returns an iterator object of the values in a Map.
for (const x of myMap.values()) {
console.log(x);
}

// 10) clear(): Removes all the elements from a Map.
myMap.clear();

---

                      Object Methods

---

// Managing Object

// 1) Object.create()
// Creates a new object
const animal = { species: "Animal" };
const dog = Object.create(animal);
console.log(dog.species);

// 2) Object.defineProperty()
// Adds or modifies a property directly on an object
const person = {};
Object.defineProperty(person, "name", {
value: "Gaurav",
writable: false,
});
console.log(person.name);

// 3) Object.defineProperties()
// Defines new or modifies existing properties directly on an object
const student = {};
Object.defineProperties(student, {
firstName: { value: "Gaurav", writable: false },
lastName: { value: "Patil", writable: false },
});
console.log(student.firstName);

// 4) Object.getOwnPropertyDescriptor()
// Returns a property descriptor for a named property on an object
const car = { brand: "Ford" };
const descriptor = Object.getOwnPropertyDescriptor(car, "brand");
console.log(descriptor.value);

// 5) Object.getPrototypeOf()
// Returns the prototype of the specified object
const cat = Object.create(animal);
const proto = Object.getPrototypeOf(cat);
console.log(proto === animal); // true

// 6) Object.keys()
// Returns an array of a given object's property names
const fruit = { name: "Apple", color: "red" };
const myKeys = Object.keys(fruit);
console.log(myKeys); // ["name", "color"]

// Protecting Object

// 1) Object.preventExtensions()
const obj1 = { property1: "value1" };
Object.preventExtensions(obj1);
obj1.property2 = "value2"; // Won't work
console.log(obj1.property2); // Output: undefined

// 2) Object.isExtensible()
// Checks whether new properties can be added to an object
const obj2 = { property1: "value1" };
console.log(Object.isExtensible(obj2)); // Output: true
Object.preventExtensions(obj2);
console.log(Object.isExtensible(obj2)); // Output: false

// 3) Object.seal()
// Prevents new properties from being added and marks all existing properties as non-configurable
const obj3 = { property1: "value1" };
Object.seal(obj3);
obj3.property1 = "new_value1"; // Works
obj3.property2 = "value2"; // Won't work
console.log(obj3.property2); // Output: undefined

// 4) Object.isSealed()
// Checks if an object is sealed
console.log(Object.isSealed(obj3)); // Output: true

// 5) Object.freeze()
// Freezes an object
const obj4 = { property1: "value1" };
Object.freeze(obj4);
obj4.property1 = "new_value1"; // Won't work
obj4.property2 = "value2"; // Won't work
console.log(obj4.property1); // Output: 'value1'

// 6) Object.isFrozen()
// Determines if an object is frozen
console.log(Object.isFrozen(obj4)); // Output: true
