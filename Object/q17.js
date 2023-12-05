// LINK : https://www.instagram.com/p/CxvwZ5nMLz_/

let x = {
  flag: 1,
  toString: function () {
    return this.flag++;
  },
};

if (x == 1 && x == 2 && x == 3) {
  console.log("All conditions are true"); // * : All conditions are true
}
