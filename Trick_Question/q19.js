// LINK : https://www.instagram.com/p/Ct6ePheA4Ws/

const arr1 = [1, 2, 3];

const r1 = arr1.map((num) => {
  if (num > 0) return;
  return num * 2;
});

console.log(r1); // * : [ undefined, undefined, undefined ]
