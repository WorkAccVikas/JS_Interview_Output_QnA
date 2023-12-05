// TOPIC : Flattened Array
// NOTE : YTD LINK : https://www.youtube.com/watch?v=MmpwNCqBhoM&ab_channel=JsCafe

let arr1 = [
  [[1, [1.1]], 2, 3],
  [4, 5],
];

function flattenArray(arr) {
  return arr.reduce((prevVal, currentVal) => {
    if (Array.isArray(currentVal)) {
      prevVal = prevVal.concat(flattenArray(currentVal));
    } else {
      prevVal.push(currentVal);
    }
    return prevVal;
  }, []);
}

console.log(flattenArray(arr1));
