var name = "Sachin";

const person = {
  name: "Sehwag",

  prop: {
    name: "Gambhir",
    getName: function () {
      console.log(this.name);
    },
  },

  getName: function () {
    console.log(this.name);
  },

  getName2: () => {
    console.log(this.name);
  },

  getName3: (function () {
    return this.name;
  })(),

  getName4: (() => {
    return this.name;
  })(),
};

person.prop.getName(); // * : Gambhir
person.getName(); // * : Sehwag
person.getName2(); // * : undefined (Node js) and Sachin (browser)
// console.log(person.getName3()); // ! : wrong way
console.log(person.getName3); // * : undefined (Node js) and Sachin (browser)
console.log(person.getName4); // * : undefined (Node js) and Sachin (browser)
