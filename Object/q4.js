const person1 = {
  id: 1,
  name: "Ram",
  family: {
    father: "Karan",
    mother: "Madhuri",
    hobbies: ["sing", "dance"],
  },
};

const copy_person1 = person1;

console.log(person1);
console.log(copy_person1);

console.log(person1 == copy_person1); // ! : true (both point to same object in memory)
console.log(person1 === copy_person1); // ! : true (both point to same object in memory)

copy_person1.name = "Akshit"; // ! : changed
copy_person1.family.father = "Raju"; // ! : changed

console.log(person1);
console.log(copy_person1);

// #############################################################
// TOPIC : Shallow Copy
const person2 = {
  id: 1,
  name: "Ram",
  family: {
    father: "Karan",
    mother: "Madhuri",
    hobbies: ["sing", "dance"],
  },
};
const copy_person2 = { ...person2 };

console.log(person2);
console.log(copy_person2);

console.log(person2 == copy_person2); // * : false (both point to different location in memory)
console.log(person2 === copy_person2); // * : false (both point to different location in memory)

console.log(person2.family == copy_person2.family); // ! : true (both point to same object in memory)
console.log(person2.family === copy_person2.family); // ! : true (both point to same object in memory)

copy_person2.name = "Harshad"; // * : not changed
copy_person2.family.father = "Ketan"; // ! : changed

console.log(person2);
console.log(copy_person2);

// #############################################################
const person3 = {
  id: 1,
  name: "Ram",
  family: {
    father: "Karan",
    mother: "Madhuri",
    hobbies: ["sing", "dance"],
  },
};
const copy_person3 = Object.assign({}, person3);

console.log(person3);
console.log(copy_person3);

console.log(person3 == copy_person3); // * : false (both point to different location in memory)
console.log(person3 === copy_person3); // * : false (both point to different location in memory)

console.log(person3.family == copy_person3.family); // ! : true (both point to same object in memory)
console.log(person3.family === copy_person3.family); // ! : true (both point to same object in memory)

copy_person3.name = "Sagar"; // * : not changed
copy_person3.family.father = "Amit"; // ! : changed

console.log(person3);
console.log(copy_person3);

// #############################################################
// TOPIC : Deept Copy

const person4 = {
  id: 1,
  name: "Ram",
  family: {
    father: "Karan",
    mother: "Madhuri",
    hobbies: ["sing", "dance"],
  },
};
// const copy_person4 = JSON.parse(JSON.stringify(person4));
// or
const copy_person4 = structuredClone(person4);

console.log(person4);
console.log(copy_person4);

console.log(person4 == copy_person4); // * : false (both point to different location in memory)
console.log(person4 === copy_person4); // * : false (both point to different location in memory)

console.log(person4.family == copy_person4.family); // * : false (both point to different location in memory)
console.log(person4.family === copy_person4.family); // * : false (both point to different location in memory)

copy_person4.name = "Sagar"; // * : not changed
copy_person4.family.father = "Amit"; // * : not changed

console.log(person4);
console.log(copy_person4);
