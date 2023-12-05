const code = {
  type: "web",
};

const reactJS = {
  name: "js",
  web: true,
};

console.log(reactJS[code.type]); // * : true
console.log(reactJS[reactJS["type"]]); // * : undefined
console.log(code.type.web); // * : undefined
// console.log(code.city.web); // ! : Cannot read properties of undefined (reading 'web')

