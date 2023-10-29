//We cannot use arrow method as class conctructor

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person1 = new Person("Gaurav", 22);
console.log(person1.display());
