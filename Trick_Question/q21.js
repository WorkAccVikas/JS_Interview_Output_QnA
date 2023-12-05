// LINK : https://www.instagram.com/p/Ct6gChtgEnn/

function Hero() {
  this.city = "Mumbai";
  return { city: "Goa" };
}

const ob1 = new Hero();
console.log(ob1); // * : { city: 'Goa' }

console.log(ob1.city); // * : Goa

// #####################################3
function Country() {
  this.state = "UP";
  this.pinCode = 489625;
}

const ob2 = new Country();
console.log(ob2); // * : Country { state: 'UP', pinCode: 489625 }

console.log(ob2.state); // * : UP
console.log(ob2.pinCode); // * : 489625
