/*
  If a given string is a palindrome, return true. Else, return false.
  Strings can include punctuation and capital letters.

  isPalindrome('race car') // true
  isPalindrome('Hajldi!sf a?m') // false
*/

const isPalindrome = (string) => {
  string = string.toLowerCase().match(/[a-z]/g);

  return string.join('') === string.reverse().join('');
};

console.log(isPalindrome('race car'));