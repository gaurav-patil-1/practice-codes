//Nesting in template literals allows you to embed a template literal within another template literal

const timeOfTheDay = "Evening";

//Without Nesting
const time = `Good ${
  timeOfTheDay === "Morning"
    ? "Morning"
    : timeOfTheDay === "Afternoon"
    ? "Afternoon"
    : "Evening"
}`;

console.log(time); //"Good Evening"

//Without Nesting

const time1 = `Good ${
  timeOfTheDay === "Morning"
    ? "Morning"
    : `${timeOfTheDay === "Evening" ? "Evening" : "Afternoon"}`
}`;

console.log(time1); //"Good Evening"
