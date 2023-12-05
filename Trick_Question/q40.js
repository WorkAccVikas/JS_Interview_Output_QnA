// LINK : https://www.instagram.com/p/CylJj7GL3KM/

// INPUT : "a.b.c.d.e"

/**
 * OUTPUT :
 * {
  a: {
    b: {
      c: {
        d: e,
      },
    },
  },
}
 */

let str = "a.b.c.d.e";

let res = str.split(".").reduceRight((acc, curr) => {
  console.log(acc);
  return { [curr]: acc };
});

let keys = str.split(".");

let res1 = keys.reduceRight((acc, key) => ({ [key]: acc }), keys.pop());

console.log(res); // * : { a: { b: { c: { d: 'e' } } } }
console.log(res1); // * : { a: { b: { c: { d: 'e' } } } }
