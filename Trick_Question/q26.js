// LINK : https://www.instagram.com/p/CuAKLt3gnic/

class Person {
  constructor() {
    this.name = "Ram";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Seeta";
  }
};

const ob1 = new Person();
console.log(ob1.name); // * : Seeta
