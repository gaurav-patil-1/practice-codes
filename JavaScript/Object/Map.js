// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.

//map methods:

// 1) new Map(): Creates a new Map object.
const myMap = new Map();

// 2) set(): Sets the value for a key in a Map.
myMap.set("key1", "FC Barcelona");
myMap.set("key2", "Atletico Madrid");
myMap.set("key3", "Athletic Club");
myMap.set("key4", "Villarreal");

// 3) get(): Gets the value for a key in a Map
const value = myMap.get("key1");
console.log(value);

// 4) delete(): Removes a Map element specified by a key.
myMap.delete("key4");

// 5) has(): Returns true if a key exists in a Map.
myMap.has("key3");

// 6) forEach(): Invokes a callback for each key/value pair in a Map.
myMap.forEach((value, key) => {
  console.log(`Key : ${key} : Value : ${value}`);
});

// 7) entries(): Returns an iterator object with the [key, value] pairs in a Map.
for (const [key, value] of myMap.entries()) {
  console.log(`Key : ${key} : Value : ${value}`);
}

// 8) keys(): Returns an iterator object with the keys in a Map.
for (const k of myMap.keys()) {
  console.log(k);
}

// 9) values(): Returns an iterator object of the values in a Map.
for (const x of myMap.values()) {
  console.log(x);
}

// 10) clear(): Removes all the elements from a Map.
myMap.clear();
