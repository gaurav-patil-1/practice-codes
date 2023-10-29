//The loop will iterate over each property and assign its property name to a variable
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
