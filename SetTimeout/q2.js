const ram = {
  name: "Ram",
  sayName: function () {
    console.log(this.name);
    return this.name;
  },
};

setTimeout(ram.sayName, 2000); // * : undefined

setTimeout(() => ram.sayName(), 2000); // * : Ram
setTimeout(ram.sayName.bind(ram), 2000); // * : Ram
