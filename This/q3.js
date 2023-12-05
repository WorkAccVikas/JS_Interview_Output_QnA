// LINK : https://www.instagram.com/p/Cy8YFw-yKMS/

function f1() {
  console.log(this); // *  person obj
}

const person = {
  id: 1,
  name: "John",
};

f1.call(person);

const f2 = () => {
  console.log(this); // * : window obj
};

f2.call(person);
