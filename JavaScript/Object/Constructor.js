function employee(fName, lName, id, age, address, companyName) {
  this.fName = fName;
  this.lName = lName;
  this.id = id;
  this.age = age;
  this.address = address;
  this.companyName = companyName;
  this.display = function () {
    return `Name : ${this.fName} ${this.lName}
      Id : ${this.id}
      Age : ${this.age}
      Address : ${this.address}
      Company Name : ${this.companyName}`;
  };
}
// We cant add new property to object constructor

const emp1 = new employee(
  "Gaurav",
  "Patil",
  123,
  22,
  "Bangalore, India",
  "Catchpoint"
);

const displayEmp1 = emp1.display();
console.log(displayEmp1);
