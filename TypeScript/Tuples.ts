//Touples are typ[ed array with predefimed length and type for each index
//syntax



//define the touple
let myTouple:[number,string,boolean];
//initialise correctly 
myTouple=[23,"Gaurav",true];

//Note : we also have to maintain the order when initializing the values otherwise it'll throw an error

myTouple.push("Patil");



//Readonly Touple :

let ourTouple:[number,string,boolean];
ourTouple=[23,"Gaurav",true];
ourTouple.push("Hello World!");
//There is no type safety in our touple for indexes 3+
console.log(ourTouple);

let teamTouple: readonly [number,string,boolean]=[1,"FC Barcelona",true];
// teamTouple.push("Real Madrid"); //Error : Property 'push' does not exist on type 'readonly [number, string, boolean]'



// Named Touples :
//named touples allows us to provide context for our values at each index

const graph: [x:number, y:number]=[55.2,41.3];


//Destructuring touples
const [x,y]=graph;
console.log(`x: ${x}`);
console.log(`y: ${y}`);

