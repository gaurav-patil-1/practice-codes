// Creating an array
let teams = ["Barcelona", "Real Madrid", "Atletico Madrid", "Valencia"];

// push(): Adds elements to the end of an array
teams.push("Girona");
console.log(teams); //["Barcelona", "Real Madrid", "Atletico Madrid", "Valencia", "Girona"]

// pop(): Removes the last element from an array
const lastTeam = teams.pop();
console.log(lastTeam); //"Girona"
console.log(teams); //["Barcelona", "Real Madrid", "Atletico Madrid", "Valencia"]

// shift(): Removes the first element from an array
const firstShift = teams.shift();
console.log(firstShift); //"Barcelona"
console.log(teams); //["Real Madrid", "Atletico Madrid", "Valencia"]

// unshift(): Adds elements to the beginning of an array
teams.unshift("Barcelona");
console.log(teams); //["Barcelona", "Real Madrid", "Atletico Madrid", "Valencia"]

// concat(): Combines two arrays into a new array
const moreTeams = ["Real Sociedad", "Real Betis"];
const combinedTeams = teams.concat(moreTeams);
console.log(combinedTeams); //["Real Madrid", "Atletico Madrid", "Valencia", "Real Sociedad", "Real Betis"]

// join(): Joins array elements into a string
const teamsString = combinedTeams.join(", ");
console.log(teamsString); //"Real Madrid, Atletico Madrid, Valencia, Real Sociedad, Real Betis"

// slice(): Returns a portion of an array
const slicedTeams = combinedTeams.slice(1, 3);
console.log(slicedTeams); //["Atletico Madrid", "Valencia"]

// splice(): Adds/removes elements at a specified index
combinedTeams.splice(2, 0, "Sevilla");
console.log(combinedTeams); //["Real Madrid", "Atletico Madrid", "Sevilla", "Valencia", "Real Sociedad", "Real Betis"]

// forEach(): Executes a function for each element
combinedTeams.forEach((team) => {
console.log(team);
});
// O/P:
// "Real Madrid"
// "Atletico Madrid"
// "Sevilla"
// "Valencia"
// "Real Sociedad"
// "Real Betis"

// map(): Creates a new array with modified elements
const teamLengths = combinedTeams.map((team) => {
return team.length;
});
console.log(teamLengths); //[11, 15, 7, 8, 13, 10]

// filter(): Creates a new array with filtered elements
const filteredTeams = combinedTeams.filter((team) => {
return team.length > 10;
});
console.log(filteredTeams); //["Real Madrid", "Atletico Madrid", "Real Sociedad"]

// reduce(): Reduces array elements to a single value
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, currentValue) => {
return acc + currentValue;
}, 0);
console.log(sum); //10

// find(): Finds the first element that satisfies a condition
const tempTeam = combinedTeams.find((team) => {
return team.includes("a");
});
console.log(tempTeam); //"Real Madrid"

// findIndex(): Finds the index of the first element that satisfies a condition
const tempIndex = combinedTeams.findIndex((team) => {
return team.includes("a");
});
console.log(tempIndex); //0

//// sort(): Sorts array elements in place
combinedTeams.sort();
console.log(combinedTeams); //["Atletico Madrid", "Real Betis", "Real Madrid", "Real Sociedad", "Sevilla", "Valencia"]

// reverse(): Reverses the order of array elements in place
combinedTeams.reverse();
console.log(combinedTeams); //["Valencia", "Sevilla", "Real Sociedad", "Real Madrid", "Real Betis", "Atletico Madrid"]

// includes(): Checks if an element exists in an array
const isPresent = combinedTeams.includes("Valencia");
console.log(isPresent); //true

// indexOf(): Finds the index of an element (or -1 if not present)
const indexFound = combinedTeams.indexOf("Real Madrid");
console.log(indexFound); //3
