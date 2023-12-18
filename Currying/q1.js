// LINK : https://www.instagram.com/p/CwuhfwMsi_m/

const add = (x) => (y) => (z) => {
  console.log(x, y, z); // * : 10 20 30
  return x + y + z;
};

console.log(add(10)(20)(30)); // * : 60
