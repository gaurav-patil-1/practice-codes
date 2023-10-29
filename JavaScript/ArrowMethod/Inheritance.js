//Arrow methods has auto binding with this so that we can use them as class methods

class Animal {
  constructor(name) {
    this.name = name;
  }
  sound = () => {
    console.log(this.name);
  };
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  sound = () => {
    console.log(`${this.name} : ${this.breed}`);
  };
}

const animal1 = new Dog("Dog", "Labro");

animal1.sound(); //"Dog : Labro"
