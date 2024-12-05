const arrays =[
   42,
   true,
   "Hello , World!",
{

    name:"John",
    age:25,
     isStudent : false,

},
   false,
   3.14,
   "javaScript is fun!",
]


//Q#01
const stringArray = arrays.map((element)=>
element.toString());
console.log(stringArray);

//Q#02
const numbers = arrays.filter((element) => 
    typeof element === 'number');
console.log(numbers);

//Q#03
arrays.forEach((element) => {
    console.log(`Element: ${element}, Type: ${typeof element}`);
  });


//Q#04
const sumOfNumbers = arrays.reduce((number, currentElement) => {
    if (typeof currentElement === 'number') {
      return number + currentElement;
    } else {
      return number;
    }
  }, 0);
  console.log(sumOfNumbers);

  
//Q#05
const firstBooleanValue = arrays.find((element) =>
     typeof element === 'boolean');
console.log(firstBooleanValue);

//Q#06
const index = arrays.findIndex((element) => 
    typeof element === 'object');
console.log(index);

//Q#07
const StringWithNumber = arrays.some((element) => {
    if (typeof element === 'string') {
      return /\d/.test(element);
    }
    return false;
  });

//Q#08
const allStrings = arrays.every((element) =>
     typeof element === 'string');
console.log(allStrings);



