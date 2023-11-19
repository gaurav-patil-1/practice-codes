//Explicit Type Assignment

let myName:string="Gaurav Patil";

//Implicit Type Assignment
// TS will the type bases on the assignment value

let myAge=23;  //myAge:number

//Error in type Assignment

// myName=123; //Error : Type 'number' is not assignable to type 'string'
// myAge="abc"; //Error : Type 'string' is not assignable to type 'number'