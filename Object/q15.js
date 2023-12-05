// LINK : https://www.instagram.com/p/CxOXhAWMSq5/

const obj = {};

obj[(obj["A"] = 10)] = "C";

console.log(obj); // * : { 10: 'C', A: 10 }
