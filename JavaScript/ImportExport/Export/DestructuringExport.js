//Destructuring export

//Destructuring from an object and exporting
const obj = {
  name1: "",
  name2: "",
};

//bar as alias while exporting name2
export const { name1, name2: bar } = obj;

//Destructuring from and array and exporting
const games = ["Football", "Cricket"];

export const [game1, game2] = games;
