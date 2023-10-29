const person = {
  fName: "Gaurav",
  lName: "Patil",
  address: "Bangalore",
};

//The properties of an object can be displayed as a string :
console.log(
  `Name : ${person.fName}${person.lName}, Address : ${person.address}`
);

//The properties of an object can be collected in a loop:
let txt = "";
for (let x in person) {
  txt += `${person[x]} `;
}
console.log(txt);

//Displaying object with Object.values()
let txt1 = Object.values(person);

//Using JSON.stringify

let txt2 = JSON.stringify(person);
console.log(txt2);
