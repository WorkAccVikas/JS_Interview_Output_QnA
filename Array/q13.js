function insertAtIndex(arr, index, newItem) {
  return [...arr.slice(0, index), newItem, ...arr.slice(index)];
}

let arr = [10, 20, 30];

console.log(insertAtIndex(arr, 1, 50));
