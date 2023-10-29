//Not usable as conctructors
//Arrow functions can't be used as constructors means we cant use new keyword with them

// e.g. 1)

const Traditional = function () {};
const Arrow = () => {};

const obj1 = new Traditional(); //OK
const obj2 = new Arrow(); // Throws TypeError: Arrow is not a constructor

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//e.g. 2)
//we can only use traditional function as conctructor
function student(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.introduce = function () {
    return `Name : ${this.name}, Age : ${this.age}, City : ${this.city}`;
  };
}

const Std1 = new student("Gaurav", 22, "Bangalore"); //OK
console.log(Std1.introduce());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Arrow function used in Object.defineProperty() also causes same issue as it inherit this from global context
const obj3 = {
  a: 30,
};

Object.defineProperty(obj3, "b", {
  get: () => this.a + 10,
});

console.log(obj3.b); //NaN

//solution
Object.defineProperty(obj3, "c", {
  get: function () {
    return this.a + 10;
  },
});

console.log(obj3.c); //40
