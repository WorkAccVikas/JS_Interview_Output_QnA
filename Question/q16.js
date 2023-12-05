// LINK : https://www.youtube.com/watch?v=6c9YSFf6I2Q&ab_channel=NishaSingla

// INPUT : React is a library
// OUTPUT : a is React library

let str = "React is a library";

console.log(str.trim().length); // * : 18

function ascendingOrder(str) {
  let arr = str.split(" ");

  console.log(arr); // * : [ 'React', 'is', 'a', 'library' ]

  arr.sort((a, b) => {
    return a.length - b.length;
  });

  console.log(arr); // * : [ 'a', 'is', 'React', 'library' ]

  let r1 = arr.join(" ");
  console.log(r1); // * : a is React library
  console.log(r1.length); // * : 18

  let r2 = arr.reduceRight((acc, i) => acc + " " + i).trim();
  console.log(r2); // * : library React is a
  console.log(r2.length); // * : 18
}

ascendingOrder(str);
