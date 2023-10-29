const person = {
  name: "Gaurav",
  age: 22,
  city: "Bangalore",
};

//With dot notation
console.log(person.name); //Gaurav
//With bracket notation
console.log(person["name"]); //Gaurav
//With expression
const name = "name";
console.log(person[name]); //Gaurav
