//arguments is an array like object which holds the passed arguments for a function

//Traditional Function :
function traditionalFunction() {
  console.log(arguments[0]);
}

traditionalFunction(1, 2, 3); //1

//Arrow Method :

const arrayMethod = () => {
  console.log(arguments[0]);
};

arrayMethod(1, 2, 3); //Uncaught ReferenceError: arguments is not defined"
