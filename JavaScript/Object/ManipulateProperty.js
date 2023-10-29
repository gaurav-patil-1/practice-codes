const employee = {
  name: "Gaurav Patil",
  age: 22,
  company_name: "Catchpoint",
  city: "Bangalore",
  country: "India",
};

//Adding new property
employee.nationality = "Indian";

//Deleting existing property
delete employee.age;
console.log(employee);
