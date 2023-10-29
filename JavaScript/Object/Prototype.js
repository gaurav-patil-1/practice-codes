//The JavaScript prototype property allows you to add new properties to object constructors
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
employee.prototype.languageKnown = "English";

const emp1 = new employee(
  "Gaurav",
  "Patil",
  123,
  22,
  "Bangalore, India",
  "Catchpoint"
);
const displayEmp1 = emp1.display();
console.log(displayEmp1 + "\nLangauage Known : " + emp1.languageKnown);
