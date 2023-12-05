const dynamicKey = "city";

const obj = {
  [dynamicKey]: "Mumbai",
};

console.log(obj.city); // * : Mumbai
console.log(obj[dynamicKey]); // * : Mumbai
