//Values in object can be another object

//Nested Object
const person = {
  name: "Mayur",
  cars: {
    car1: "BMW",
    car2: "Mercedes",
    car3: "Porsche",
    car4: "Audi",
  },
};

console.log(person.cars.car1);
console.log(person.cars["car1"]);
console.log(person["cars"]["car1"]);

//Nested Object and Arrays :

//Values in objects can be arrays, and values in arrays can be objects:
const obj = {
  name: "Gaurav",
  hobbies: [
    { title: "football", data: ["a", "b", "c"] },
    { title: "cricket", data: ["d", "e", "f"] },
    { title: "trekking", data: ["g", "h", "i"] },
  ],
};

for (let x in obj.hobbies) {
  console.log(obj.hobbies[x].title);
  for (let y in obj.hobbies[x].data) {
    console.log(obj.hobbies[x].data[y]);
  }
}
