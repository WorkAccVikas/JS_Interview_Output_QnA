// LINK : https://www.instagram.com/p/CyV98iByCRS/

function Person1() {
  this.hero = "Virat";
}

const obj1 = new Person1();

console.log(obj1); // * : Person { hero: 'Virat' }

console.log(obj1 instanceof Person1); // * : true

// #####################################################

function Person2() {
  this.hero = "Virat";

  return { hero: "Sachin" };
}

const obj2 = new Person2();

console.log(obj2); // * : { hero: 'Sachin' }

console.log(obj2 instanceof Person2); // * : false
console.log(obj2 instanceof Person1); // * : false
