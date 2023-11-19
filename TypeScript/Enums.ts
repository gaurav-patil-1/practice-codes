//by default enum will initialize the first value to 0 and add 1 to each additional value

//Numeric Enums : Default
enum Directions{
    North,
    East,
    South,
    West
};

let currentDirection=Directions.North;
// logs 0
console.log(currentDirection);
// currentDirection="North"; // Error : Type '"North"' is not assignable to type 'Directions'



//Numeric Enums : Initialized
//we can the value of first numeric enum and have it auto increment fot that

enum cardinalDirections{
    North=1,
    East,
    South,
    West
};

console.log(cardinalDirections.North); //1
console.log(cardinalDirections.West); //4


//Numeric Enum : Fully Initialezed

enum StatusCodes{
    NotFound=404,
    Success=200,
    Accepted=202,
    BadRequest=400
}

console.log(StatusCodes.NotFound); //404
console.log(StatusCodes.Success); //200



//String Enums :

enum StringCardinalDirection{
    North="North",
    South="South",
    East="East",
    West="West"
}

console.log(StringCardinalDirection.North);
console.log(StringCardinalDirection.East);

