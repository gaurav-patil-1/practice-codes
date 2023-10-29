//If we use arrow function as class methods then "this" will always be pointing to class instance ,
//irrespective of how it is called

//e.g.
class Player {
  name = "messi";
  display = () => {
    return `Name : ${this.name}`;
  };
}

const plr1 = new Player();
console.log(plr1.display());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we can achieve same functionality by using the .bind(this) in the constructor

class Game {
  name = "Football";
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    return `Game : ${this.name}`; //"Name : messi"
  }
}

const gm = new Game();
console.log(gm.method()); //"Game : Football"
