// PROBLEM : Check palindrome number

// LINK : https://www.youtube.com/shorts/mouwxIk4OQY

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(596));

function isPalindrome(number) {
  if (number < 0) return false;

  number = number.toString();

  let left = 0;
  let right = number.length - 1;

  while (left < right) {
    if (number[left] !== number[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
