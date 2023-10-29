//Arrow functions are useful when we want to preserve this context such as in callbacks like setTimeout() and event listeners

//Problem 1 :

//traditional function issue :
const obj = {
  counter: 0,
  doSomethingLater: function () {
    setTimeout(function () {
      ++this.counter;
      console.log(`Counter : ${this.counter}`);
    }, 1000);
  },
};

obj.doSomethingLater(); //After 1 sec : "Counter : NaN"

//Arrow Function Solution :

const obj1 = {
  counter: 0,
  doSomethingLater: function () {
    setTimeout(() => {
      ++this.counter;
      console.log(`Counter : ${this.counter}`);
    }, 1000);
  },
};

obj1.doSomethingLater(); //After 1 sec : "Counter : 1"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Problem 2 : "this" with nested function :

//issues with traditional method

const obj2 = {
  name: "Gaurav",
  hobbies: ["Football", "Cricket", "Trekking", "Gaming"],
  method: function () {
    this.hobbies.forEach(function (x) {
      console.log(`${this.name} : ${x}`); // we wont be able to use this.name with obj2 context as this nested method will
    }); // its own this with global context in this case
  },
};

obj2.method();
//O/P :
// "undefined : Football"
// "undefined : Cricket"
// "undefined : Trekking"
// "undefined : Gaming"

//Arrow function solution :

const obj3 = {
  name: "Gaurav",
  hobbies: ["Football", "Cricket", "Trekking", "Gaming"],
  method: function () {
    this.hobbies.forEach((x) => {
      console.log(`${this.name} : ${x}`); // we wont be able to use this.name with obj2 context as this nested method will
    }); // its own this with global context in this case
  },
};

obj3.method();
//O/P :
// "Gaurav : Football"
// "Gaurav : Cricket"
// "Gaurav : Trekking"
// "Gaurav : Gaming"
