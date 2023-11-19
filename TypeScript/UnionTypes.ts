//Union Types
// It is used when value can be more than a single type

function printStatusCode(code:string | number){
    console.log(`My status code is : ${code}`);
}

printStatusCode(401);
printStatusCode("400");

