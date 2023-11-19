//Syntax

const names:string[]=["Gaurav","Akshay","Yashodeep","Mayur"];
names.push("Pranav"); //No Error
// names.push(3); // Error : Argument of type 'number' is not assignable to parameter of type 'string'

//Readonly : Prevents array from being changed

const teams: readonly string[]=["FC Barcelona","Real Madrid","PSG","Valencia","Manchester City","Chelsea"];
// teams.pop(); //Error : Property 'pop' does not exist on type 'readonly string[]'

//Type Inference :
// TS can infer the type of an array if it has values

let numbers=[1,2,3,4,5];
// numbers.push("Football"); //Error : Argument of type 'string' is not assignable to parameter of type 'number'




