f1();

let f1 = () => {
  console.log(1);
};

f1();

function f1() {
  console.log(2);
}

f1();

/** OUTPUT :
 * Identifier 'f1' has already been declared (Because let)
 */
