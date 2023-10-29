//creating object with object literals

const student = {
  name: "Gaurav",
  age: 22,
};

//alternate way
const person = {};
person.name = "Gaurav Patil";
person.age = 22;
person.companyName = "Catchpoint";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creating object with new keyword

const player = new Object();
player.name = "Lionel Messi";
player.age = 36;
player.country = "Argemtina";
player.club = "Inter Miami";

console.log(player);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creating object with constructor function

function createTeam(name, league, titles) {
  this.name = name;
  this.league = league;
  this.titles = titles;
}

const myTeam = new createTeam(
  "FC Barcelona",
  "La Liga Santander",
  "5 Champions League"
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creating object using Object.create()
const objectPrototype = {
  name: "",
  age: null,
  collegeName: "",
};

const obj = Object.create(objectPrototype);
