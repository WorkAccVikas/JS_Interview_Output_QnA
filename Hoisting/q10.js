f1();

var f1 = () => {
  console.log(1);
};

f1();

function f1() {
  console.log(2);
}

f1();

/** OUTPUT:
 * 2
 * 1
 * 1
 */

