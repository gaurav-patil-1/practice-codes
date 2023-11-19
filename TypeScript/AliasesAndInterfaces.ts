//Aliases :
//Type Aliases allow define types with custom names

type CarYear=number;
type CarType=string;
type CarModel=string;

type Car={
    year:CarYear,
    type: CarType,
    model:CarModel
}

const carYear:CarYear=2001;
const carType:CarType="Toyota";
const carModel:CarModel="Corolla";

const car:Car={
    year:carYear,
    type:carType,
    model:carModel
}



//Interface :
//Interfaces are similar to type aliases except they only apply to objects

interface Reactangle{
    height:number,
    width:number
};

const rectangle:Reactangle={
    height:20,
    width:10
};
console.log(rectangle.height);
console.log(rectangle.width);


//Extending Interfaces :
// Interfaces can extend each others definition

interface Square{
    side:number
}

interface ColoredSquare extends Square{
    color:string
}

const coloredSquare:ColoredSquare={
    side:20,
    color:"red"
};


