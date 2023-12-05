// LINK : https://www.instagram.com/p/Ct0u3jGgtr-/
class Lizard {
  static colorChange(instance, newColor) {
    // console.log(instance);
    instance.color = newColor;
    return instance.color;
  }

  constructor({ newColor = "black" } = {}) {
    this.color = newColor;
  }
}

const ob1 = new Lizard({ newColor: "Pink" });
console.log(ob1.color); // * : Pink
console.log(Lizard.colorChange(ob1, "grey")); // Change the color of ob1 to "grey"
console.log(ob1.color); // Now ob1 color is "grey"
