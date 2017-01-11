/*
Given an array of integers, return the index of the pivot.
Example: 
arr = [4, 5, 6, 1, 2, 3];
findPivot(arr) // 3

*/

// O(n) time complexity
// O(1) space complexity
const findPivot = (ints) => {
  if (ints[1] > ints[0]) {
    for (let i = 1; i < ints.length; i++) {
      if (ints[i] < ints[i - 1]) {
        return i;
      }
    }
  }

  return -1;
};

var ints = [4, 5, 6, 1, 2, 3];
console.log(findPivot(ints)); // 3