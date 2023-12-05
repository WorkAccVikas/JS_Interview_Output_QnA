// LINK : https://www.instagram.com/p/Ct6w1ZngcKu/

const ob1 = { id: 1, name: "Ram" };
const ob2 = { city: "Goa", ...ob1 };

console.log(ob2); // * : { city: 'Goa', id: 1, name: 'Ram' }

// ###########################################################

const ob3 = { ...ob1, name: "Vikas" }; // * : changed (right way)
console.log(ob3); // * : { id: 1, name: 'Vikas' }

// ###########################################################
const ob4 = { name: "Jatin", ...ob1 }; // ! : not changed (wrong way)
console.log(ob4); // * : { name: 'Ram', id: 1 }
