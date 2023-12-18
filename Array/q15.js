// LINK : https://www.instagram.com/p/CybHlMMy-WJ/

function f1() {
  console.log(arguments); // * : [Arguments] { '0': 10, '1': 20, '2': 30 }
  console.log(typeof arguments); // * : object
  console.log(Array.isArray(arguments)); // * : false

  console.log("0 = ", arguments[0]); // * : 0 =  10

  for (let i in arguments) {
    console.log(i, arguments[i]);
  }
}

f1(10, 20, 30);

/** OUTPUT :
 * 0 10
 * 1 20
 * 2 30
 */
