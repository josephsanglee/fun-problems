/*
Given an array of integers, return the index of the pivot.
Example: 
var ints = [3, 4, 5, 6, 1, 2];
findPivot(ints) // 4

*/

// const findPivot = (ints) => {
//   if (ints[1] > ints[0]) {
//     for (let i = 1; i < ints.length; i++) {
//       if (ints[i] < ints[i - 1]) {
//         return i;
//       }
//     }
//   }

//   return -1;
// };
// O(n) time complexity
// O(1) space complexity


const findPivot = (ints) => {
  //binary search for the pivot

  // start with the middle index of the array
  let start = 0;
  let end = ints.length - 1;


  // if this condition finishes, that means the 
  // entire array is sorted and there is no pivot.
  // the loop will increase the start index to be greater
  // than the end index
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // if true, ints[mid] is the pivot
    if (ints[mid] < ints[mid - 1]) { return mid; }

    // if the int at the start index is less than the int
    // than the int at the mid index, that means all of the values
    // before the mid index are sorted. Therefore, the pivot MUST 
    // be in the second half of the array. Else, the pivot MUST be
    // in the first half of the array.
    ints[start] < ints[mid] ? start = mid : end = mid;
  }

  return 0;
};
//O(logN) time complexity
//O(1) space complexity

var ints1 = [3, 4, 5, 6, 1, 2];
console.log(findPivot(ints1)); // 4

var ints2 = [7, 1, 2, 3, 4, 5, 6];
console.log(findPivot(ints2)); // 1