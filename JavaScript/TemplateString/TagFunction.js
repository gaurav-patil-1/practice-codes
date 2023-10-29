//to customize literal string output
function tag(strings, ...values) {
  return strings[0] + values[0].toUpperCase() + strings[1];
}

const name = "world";
const str = tag`Hello ${name}`;
console.log(str); //"Hello WORLD"
