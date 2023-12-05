// [ ] : Print 1 to 10 without loop

function recursion(start, end) {
  if (start <= end) {
    console.log(start);
    recursion(++start, end);
  }
}

recursion(1, 10);
