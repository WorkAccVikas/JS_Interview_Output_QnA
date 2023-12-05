const person = {
  height: 52,
};

console.log(person.height);

delete person.height;

console.log(person.height);

// OUTPUT : 52 , undefined

// #######################################################################33

const person2 = Object.create({
  height: 52,
});

// NOTE : Using Object.create height will add in prototype

console.log(person2.height);

delete person2.height;

console.log(person2.height);

// OUTPUT : 52 , 52
