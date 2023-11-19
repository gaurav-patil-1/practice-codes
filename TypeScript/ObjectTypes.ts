//syntax :

const car1:{type:string, model:string,year:number}={
    type:"Toyota",
    model:"COrolla",
    year:2009
};


// type inference
// TS can infer the types of properties based on their values

const myCar={
    name:"Audi"
};

myCar.name="BMW"; //Ok
// myCar.name=23;// Error : Type 'number' is not assignable to type 'string'



//Optional Properties :
// Optional properties are the properties which dont have to be defined in the object definition

//e.g without optional property
// const car1:{type:string, mileage:number}={
//     type:"Audi"
// } //Error : Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'

//e.g with optional property
const car2:{type:string, mileage?:number}={
    type:"BMW"
}; //Ok
car2.mileage=8;


//Index Signatures
// index signatures are used when we dont know in advance what the property names will be but we do know the type of value associated with that property names

const nameAgeMap:{[index : string] : number}={};
nameAgeMap.Jack=25;
// nameAgeMap.Mark="fifty"; //Error : Type 'string' is not assignable to type 'number'





