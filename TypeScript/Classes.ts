//Memberd : Types

class Person{
    name:string | undefined;
}

const person=new Person();
person.name="Gaurav";

//Member : visibility :

class Person1{
    private name:string;
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
}

const person1=new Person1("Gaurav");
console.log(person1.getName());


//Readonly :

class Person2{
    private readonly name:string;  // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor
    public constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
}

const person2=new Person2("Gaurav");
console.log(person1.getName());

//Inheritance : Implements 

interface Shape{
    getArea:()=>number;
}

class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){

    }
    public getArea():number{
        return this.width*this.height;
    };
}


//Inheritance : Extends 

interface Shape1{
    getArea:()=>number;
}

class Rectangle1 implements Shape1{
    public constructor(protected readonly width:number,protected readonly height:number){};
    getArea():number{
        return this.width*this.height;
    }
}

class Square1 extends Rectangle1{
    public constructor(width:number){
        super(width,width);
    }
    //getArea() gets inherited from rectangle
}


//Override :
//when a class extends another class it can replace the member of the parent class with different name

interface Shape3{
    getArea:()=>number;
}

class Rectangle3 implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){}
    getArea():number{
        return this.width*this.height
    }
    public toString():string{
        return `Rectangle[Width : ${this.width}, height : ${this.height}]`;
    }
}

class Square3 extends Rectangle3{
    public constructor(width:number){
        super(width,width);
    }
    public override toString():string{
        return `Square[side : ${this.width}]`;
    }
}

const sq= new Square3(10);
console.log(sq);

