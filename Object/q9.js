// LINK : https://www.instagram.com/p/Ct7E5FPghzA/

// TOPIC : freeze v/s seal

// TOPIC : freeze
const person = { id: 1, name: "Ram" };

Object.freeze(person);

console.log(Object.isFrozen(person)); // true
console.log(Object.isSealed(person)); // true

// NOTE : freeze : ❌ Insertion, Deletion, Updation
// NOTE : freeze  : isFrozen() and isSealed() both are true

const other_person = person;

other_person.name = "Ravan";
delete other_person.id;
other_person.country = "India";

console.log(other_person);

// #####################################################
// TOPIC : seal
const person1 = { id: 1, name: "Ram" };

Object.seal(person1);

console.log(Object.isFrozen(person1)); // false
console.log(Object.isSealed(person1)); // true

// NOTE : seal : ❌ Insertion, Deletion and ✅ updation
// NOTE : seal  : isFrozen() = true and isSealed() = true

const other_person1 = person1;

other_person1.name = "Ravan";
delete other_person1.id;
other_person1.country = "India";

console.log(other_person1);
