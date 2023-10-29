// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.
//set is an object

//Create empty set and create set and initialize it with some values
const temp = new Set();
const letters = new Set(["a", "b", "c"]);

//Adding new values in set
temp.add("A");
temp.add("B");
temp.add("C");
temp.add("D");
temp.add("D"); //no duplication allowed

let txt = "";
//invokes a callback for each element
temp.forEach((x) => {
  txt += x;
});
console.log(txt);

//return iterator object with all the values of set
const myValue = temp.values();

let text = "";
for (let x of myValue) {
  text += x;
}
console.log(text);

//as set is not having any keys so i'll return values of set only like values() method
let mykeys = temp.keys();

//it returns key value pairs but set is not having any keys so i'll return values only as values() method
const myEntries = temp.entries();

//to delete the values of set and returns true on successful deletion and false if element not present
temp.delete("A");

//to check whether the element present in the set or not and returns true if present and false if not
temp.has("B");

//to delete all the elements of the set
temp.clear();
