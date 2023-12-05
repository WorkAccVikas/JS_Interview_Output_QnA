const ram = {
  name: "Ram",
  sayName: function () {
    return this.name;
  },
};

const seeta = {
  name: "Seeta",
  sayName: function () {
    return this.name;
  },
};

console.log(seeta.sayName()); // * : Seeta

console.log(seeta.sayName.call(ram)); // * : Ram
