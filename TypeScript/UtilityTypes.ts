//Partial :
//Partial changes all the properties in an object to be optional

interface Point{
    x:number;
    y:number;
}

let pointpart:Partial<Point>={};
//Partial allows x and y to be optional

pointpart.x=10;


//Required
//Required changes all the properties of an object to be required

interface Car1{
    make:string;
    model:string;
    mileage?:number;
}

let myCar1:Required<Car1>={
    make:'Ford',
    model:'Focus',
    mileage:2000 //It forces mileage to be defined
}


//Record :
//Record is a shortcut to define object type with specified key and value pair

const nameAgeMap1:Record<string,number>={
    "Gaurav":21,
    "Virat":34
}


// Omit :
// Omit removes key from an object type

interface Person3{
    myname:string;
    age:number;
    location?:string;
}

const Bob:Omit<Person3,'age'|'location'>={
    myname:"Gaurav Patil",
}


//Pick :
//Pick removes all but the specified key from the object type

interface Person1{
    myname:string;
    age:number;
    location:string;
}

const Bob1:Pick <Person1,'location'>={
    location:"Bangalore",
}


//Exclude :
//Exclude removes type from an union

type Primitive = string | number | null;

const nyVar:Exclude<Primitive,'String'>=23;


//ReturnType :
//Extracts the return type of a function page

type PointGenerator=()=>{x:number;y:number;};

const point:ReturnType<PointGenerator>={
    x:10,
    y:20
};


//Parameters :
//Parameters extracts the parametere type of an function type as an array

type PointPrinter=(p:{x:number,y:number})=>void;

const point1:Parameters<PointPrinter>[0]={
    x:10,
    y:20
}


//Readonly :
//Readonly is used to create a new type where all the properties are readonly.

interface Person4{
    myname:string,
    age:number
}
type ReadonlyPerson=Readonly<Person3>;

const person4:ReadonlyPerson={
    myname:"Gaurav",
    age:23
}
