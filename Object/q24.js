// LINK : https://www.instagram.com/p/CzBkodmyanX/

let person = {
  name: "John",
};

let user = {
  age: 30,
};

user.__proto__ = person;

console.log(user.name); // * : John
