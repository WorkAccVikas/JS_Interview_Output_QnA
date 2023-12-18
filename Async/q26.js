function waitForNSeconds(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
}

async function exampleUsage() {
  console.log("Start");
  await waitForNSeconds(2); // Wait for 2 seconds
  console.log("After 2 seconds");
}

exampleUsage();

console.log("Other");

/** OUTPUT :
 * Start
 * Other
 * After 2 seconds (PRINT after 2 seconds)
 */
