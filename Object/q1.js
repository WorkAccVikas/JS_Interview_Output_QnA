var hero = {
  _name: "Vikas",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // * : undefined
console.log(hero.getSecretIdentity()); // * : Vikas
