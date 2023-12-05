// LINK : https://www.instagram.com/p/CuHOVPpAvUF/

var city = "LA";

const Person = {
  name: "Ram",
  city: "Mumbai",

  updateName: function (name) {
    // console.log(name);
    this.name = name;
  },

  updateCity: (city) => {
    // console.log(city);
    this.city = city;
  },
};

Person.updateName("Seeta") // * : changed (normal function)
console.log(Person.name); // * : Seeta

Person.updateCity("Goa") // * : not changed (arrow function)
console.log(Person.city); // / : Mumbai

console.log(city); // * : LA
console.log(this.city); // * : Goa