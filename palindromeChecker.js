/*******
** 
** Write an efficient function that checks whether any permutation of an input string is a palindrome.
** 
** Examples:
** "civic" should return true
** "ivicc" should return true
** "civil" should return false
** "livci" should return false
**
*******/

// const palindromeChecker = (string) => {
//   string = string.replace(/ /g, '').toLowerCase();

//   // create a hash table of the counts of all of the characters
//   // currently found. At most, the size of the chars will be 
//   // O(26), i.e. the size of the alphabet.
//   const chars = {};

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];

//     chars[char] = chars[char] ? chars[char] + 1 : 1;
//   }

//   // in order for a string to be a palindrome, only ONE
//   // char can have an odd character count.
//   let oddCharCount = false;

//   for (let char in chars) {
//     if (chars[char] % 2 !== 0) {
//       if (!oddCharCount) {
//         oddCharCount = true;
//       } else {
//         return false;
//       }
//     }
//   }

//   return true;
// };

const palindromeChecker = (string) => {
  const unpairedChars = new Set();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (unpairedChars.has(char)) {
      unpairedChars.delete(char);
    } else {
      unpairedChars.add(char);
    }
  }

  return unpairedChars.size <= 1;
};

console.log(palindromeChecker('civic')); //should return true
console.log(palindromeChecker('ivicc')); //should return true
console.log(palindromeChecker('civil')); //should return false
console.log(palindromeChecker('livci')); //should return false
console.log(palindromeChecker('racecar')); //should return true
console.log(palindromeChecker('acecarr')); //should return true