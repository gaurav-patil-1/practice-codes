//Return type
//the type of the value returned by the function can be explicitely defined

function getTime():number{
    return new Date().getTime();
}

//Void Return Type
// Return type void indicates the function doesn't return any value

function printHello():void{
    console.log("Hello");
}


//Parameters :
//Function parameters are typed with similar syntax as variable declaration

function addition(a:number,b:number){
    console.log(`Addition : ${a+b}`);
}


//Optional Parameter :
//TS will by default mark all the parameters are compulsory but they can be explicitely marked as optional

function add(a:number,b:number,c?:number){
    console.log(`Add : ${a+b}`);
}


//Default Parameter :
//for parameters with default value, the default value goes after type annotation

function multiply(a:number,b:number,c:number=1){
    console.log(`Multiplication : ${a*b*c}`);
}


//Named Parameters :
//named parameters follows same pattern as typing normal parameters

function divide({dividend,divisor}:{dividend:number,divisor:number}){
    return dividend/divisor;
}


//Rest Parameter :
//rest parameter can be typed liked an normal parameter but the type of rest parameter must be an array as rest paramter is always an array

function addNumbers(a:number,b:number,...rest:number[]){
    return a+b+rest.reduce((c,d)=>c+d,0);
}


//Type Alias :
//function types can be specified seperately from the function with type aliases

type Negate=(value:number)=>number;

const negateFunction:Negate=(value)=>value*-1;

