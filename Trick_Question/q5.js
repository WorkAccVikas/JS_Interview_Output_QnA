// LINK : https://www.instagram.com/p/Ct0u3jGgtr-/

class Lizard {
  static colorChange(newColor) {
    this.color = newColor;
    return this.color;
  }

  constructor({ newColor = "black" } = {}) {
    this.color = newColor;
  }
}

const ob1 = new Lizard({ newColor: "Pink" });
console.log(ob1.color); // * : Pink
// console.log(ob1.colorChange("yellow")); // ! : undefined (wrong way to access static method) (ob1.colorChange is not a function)
console.log(ob1.color); // * : Pink
console.log(Lizard.colorChange("grey")); // * : grey
console.log(ob1.color); // * : Pink
