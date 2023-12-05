// LINK : https://www.instagram.com/p/CuHfZ7ughLd/

const add = (x) => x + x;

function hello(num = 2, value = add(num)) {
  console.log(num, value);
}

hello(); // * : 2 4
hello(3); // * : 3 6
