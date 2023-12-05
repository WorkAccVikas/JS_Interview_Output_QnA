// LINK : https://www.instagram.com/p/CuFZ0wXATXL/

let animals = {};

let dog = { name: "sheru" };
let cat = { name: "kitty" };

animals[dog] = { ...dog, weight: 100 };
animals[cat] = { ...cat, weight: 66 };

console.log(animals); // * : { '[object Object]': { name: 'kitty', weight: 66 } }

console.log(animals[{}]); // * : { name: 'kitty', weight: 66 }
console.log(animals[cat]); // * : { name: 'kitty', weight: 66 }
console.log(animals[dog]); // * : { name: 'kitty', weight: 66 }

