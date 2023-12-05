// TOPIC : break v/s continue

for (var i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

console.log(i); // * : 3

// #########################################################
for (var k = 0; k < 5; k++) {
  if (k === 3) continue;
  console.log(k);
}

console.log(k); // * : 5

/**
 * NOTE :
 * continue : ✅ next iteration
 * break    : ❌ next iteration
 */
