// LINK : https://www.instagram.com/p/Ct6zJ0DgyuW/

const obj = {};

Object.defineProperty(obj, "id", { value: 1 });
Object.defineProperty(obj, "name", { value: "Ram", enumerable: true });

console.log(obj.id);
console.log(Object.keys(obj));
