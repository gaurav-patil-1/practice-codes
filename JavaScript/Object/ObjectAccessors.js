//JavaScript Getter :

//getters and setters are properties and not methods so we cant use () with them
const person = {
  fName: "Gaurav",
  lName: "Patil",
  get data() {
    return this.fName;
  },
};

console.log(person.data);

//JavaScript Setter :

const obj = {
  title: "Book",
  get lang() {
    return this.title;
  },
  set lang(title) {
    this.title = title;
  },
};

obj.lang = "TV";
console.log(obj.lang);
