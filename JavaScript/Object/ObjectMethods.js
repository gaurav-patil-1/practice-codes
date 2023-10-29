//Managing Object

// 1) Object.create()
//Creates a new object

const animal = { species: "Animal" };
const dog = Object.create(animal);
console.log(dog.species);

// 2) Object.defineProperty()
//Adds or modifies a property directly on an object

const person = {};
Object.defineProperty(person, "name", {
  value: "Gaurav",
  writable: false,
});

console.log(person.name);

// 3) Object.defineProperties()
//Defines new or modifies existing properties directly on an object

const student = {};
Object.defineProperties(student, {
  firstName: { value: "Gaurav", writable: false },
  lastName: { value: "Patil", writable: false },
});
console.log(student.firstName);

// 4) Object.getOwnPropertyDescriptor()
//Returns a property descriptor for a named property on an object.
const car = { brand: "Ford" };

const descriptor = Object.getOwnPropertyDescriptor(car, "brand");
console.log(descriptor.value);

// 5) Object.getPrototypeOf()
//Returns the prototype of the specified object.
const cat = Object.create(animal);
const proto = Object.getPrototypeOf(cat);
console.log(proto === animal); //true

// 6) Object.keys()
//Returns an array of a given object's property names
const fruit = { name: "Apple", color: "red" };
const myKeys = Object.keys();
console.log(myKeys); //["name", "color"]

//Protecting Object

// 1. Object.preventExtensions()
const obj1 = { property1: "value1" };
Object.preventExtensions(obj1);
obj1.property2 = "value2"; // Won't work
console.log(obj1.property2); // Output: undefined

// 2. Object.isExtensible()
//Checks whether new properties can be added to an object.
const obj2 = { property1: "value1" };
console.log(Object.isExtensible(obj2)); // Output: true
Object.preventExtensions(obj2);
console.log(Object.isExtensible(obj2));

// 3. Object.seal()
// Prevents new properties from being added and marks all
// existing properties as non-configurable. However, values of existing properties can still be changed.
const obj3 = { property1: "value1" };
Object.seal(obj3);
obj3.property1 = "new_value1"; // Works
obj3.property2 = "value2"; // Won't work
console.log(obj3.property2);

// 4. Object.isSealed()
// Checks if an object is sealed.
console.log(Object.isSealed(obj3)); // Output: true

// 5. Object.freeze()
// Freezes an object: prevents new properties from being added, existing
// properties from being removed, and prevents changing the enumerability,
// configurability, or writability of existing properties.
const obj4 = { property1: "value1" };
Object.freeze(obj4);
obj4.property1 = "new_value1"; // Won't work
obj4.property2 = "value2"; // Won't work
console.log(obj4.property1); // Output: 'value1'

// 6. Object.isFrozen()
//Determines if an object is frozen
console.log(Object.isFrozen(obj4));
