// LINK : https://www.instagram.com/p/Cy8YL53yEh0/

let obj1 = {
  name: "Ram",
  city: "Mumbai",
};

let obj2 = Object.create(obj1);
console.log(obj2.__proto__ === obj1); // * : true

delete obj2.name;
console.log(obj2); // * : {}
console.log(obj2.name, obj2.city); // * : "Ram" "Mumbai"

obj2.city = "Goa";
console.log(obj2); // * : { city: 'Goa' }
console.log(obj2.name, obj2.city); // * : "Ram" "Goa"
