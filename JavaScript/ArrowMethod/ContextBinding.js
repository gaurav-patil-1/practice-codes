// The traditionalFunction has its own this binding, which refers to obj.
// The arrowFunction inherits its this from the surrounding code,
// which is the global scope in this case, so it doesn't have access to obj.value
const obj = {
  title: "Hello World",
  traditionalFunction: function () {
    console.log(this.title);
  },
  arrowFunction: () => {
    console.log(this.title);
  },
};

obj.traditionalFunction(); //"Hello World"
obj.arrowFunction(); //undefined
