class Person {}

console.log(typeof Person); // * : function

const obj2 = new Person();
console.log(obj2); // * : Person {}
console.log(typeof obj2); // * : object

// #############################################################
function f1() {}

console.log(typeof f1); // * : function

const obj3 = new f1();
console.log(obj3); // * : f1 {}
console.log(typeof obj3); // * : object

const obj4 = f1();
console.log(obj4); // * : undefined

// #############################################################

class Hero {
  constructor(name) {
    this.name = name;
  }
}

console.log(typeof Hero); // * : function
const obj1 = new Hero("Ram");
console.log(obj1); // * : Hero { name: 'Ram' }
console.log(typeof obj1); // * : object
