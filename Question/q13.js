// LINK : https://www.instagram.com/p/CxL2M5nsn1y/

let city = "JS";

city[0] = "R";
city[1] = "X";

console.log(city); // * : JS (String is Immutable)

// ##############################################################

let s1 = "Vikas";
let s2 = new String("Vikas");

console.log(typeof s1); // * : string
console.log(typeof s2); // * : object

console.log(s1 == s2); // * : true
console.log(s1 === s2); // * : false
