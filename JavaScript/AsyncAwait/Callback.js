//Function Sequence
//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

function func1() {
  console.log("Hello");
}

function func2() {
  console.log("Bye");
}

func2();
func1();
//Bye
//Hello

//JavaScript Callbacks

//A callback is a function passed as an argument to another function.
function displayResult(sum) {
  console.log(sum);
}

function add(a, b, myCallback) {
  const result = a + b;
  myCallback(result);
}

add(2, 3, displayResult); //5
