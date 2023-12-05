// Question : Give count of each character

let str = "Vikas Kailas Chandlekar";

const obj = {};

for (let x of str) {
  obj[x] = (obj[x] || 0) + 1;
}

console.log(obj);
