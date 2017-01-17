/*
Given an array of integers, push all the zeroes to the end of the array
O(n) time complexity
O(1) space complexity

var nums = [0, 1, 0, 2, 0, 3];
moveZeroes(nums); // [1, 2, 3, 0, 0, 0];
*/

// const moveZeroes = (nums) => {
//   let pushIndex = nums.length - 1;

//   for (let i = nums.length - 1; i > -1; i--) {
//     let num = nums[i];

//     if (num === 0) {
//       let currIndex = i;

//       while (currIndex < pushIndex) {
//         [nums[currIndex], nums[currIndex + 1]] = [nums[currIndex + 1], nums[currIndex]];
//         currIndex++;
//       }

//       pushIndex--;
//     }
//   }

//   return nums;
// };

const moveZeroes = (nums) => {
  let pushIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num !== 0) {
      nums[pushIndex++] = num;
    }
  }

  while (pushIndex < nums.length) {
    nums[pushIndex++] = 0;
  }

  return nums;
};

var nums = [0, 1, 0, 2, 0, 3];
console.log(moveZeroes(nums));

