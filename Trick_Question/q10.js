// LINK : https://www.instagram.com/p/Ct19ipdgCIT/

function hello(...rest) {
  console.log(typeof rest); // * : object
  console.log(Array.isArray(rest)); // * : true

  console.log(Array.isArray(arguments)); // * : false
  console.log(typeof arguments); // * : object

  console.log(arguments);
}

hello(11, 22);
