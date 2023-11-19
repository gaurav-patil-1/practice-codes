// Type : any

let a:any="Gaurav Patil";
a=23; //Ok

// Type : unknown
//it is similar to type any but it enforces type checking which makes it type safer

let b:unknown=23;
b="Gaurav";

if(typeof b==="string"){
    console.log(b.toUpperCase());  //Gaurav
}
else{
    console.log("unknown");
}

//e.g 2

let c:unknown=22;
// console.log(b.toUpperCase()); //Not Ok


// Type : never
//effectively throws an error when it is defined

// let d:never=true; //Error


// Type: undefined and null
//these are the types which refers to javascript undefined and null

let e:undefined=undefined;
let f:null=null;
