//Methods are actions that can be performed on objects.

const emp = {
  fname: "Gaurav",
  lName: "Patil",
  companyName: "Catchpoint",
  city: "Bangalore",
  func() {
    return `${this.fname} ${this.lName}`;
  },
};

const temp = emp.func();
console.log(temp);

//Accessing object methods

console.log(emp.func());
