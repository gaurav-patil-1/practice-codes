//Raw property is available on the first argument of the tag function means
//this property will allow us to get the raw form of the string in template literals

function myTag(strings) {
  return `${strings.raw[0]}`;
}

const str = myTag`Hello Everyone \n Good Morning!!`;
console.log(str); //"Hello Everyone \n Good Morning!!"

//String.raw() method :
const str1 = String.raw`Hello World \n Happy Coding`;
console.log(str1); //"Hello Everyone \n Good Morning!!"
