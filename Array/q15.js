// LINK : https://www.instagram.com/p/CybHlMMy-WJ/

function f1() {
  console.log(arguments);
  console.log(typeof arguments); // * : object
  console.log(Array.isArray(arguments)); // * : false

  console.log("0 = ", arguments[0]);

  for (let i in arguments) {
    console.log(i, arguments[i]);
  }
}

f1(10, 20, 30);
