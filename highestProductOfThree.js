/*
Find the highest product of three with a given array of nums.
*/
const highestProductOfThree = (nums) => {
  let result = nums[0] * nums[1] * nums[2];
  let highestProductOfTwo = nums[0] * nums[1];
  let lowestProductOfTwo = nums[0] * nums[1];
  let highest = Math.max(nums[0], nums[1]);
  let lowest = Math.min(nums[0], nums[1]);

  for (var i = 2; i < nums.length; i++) {
    let num = nums[i];

    result = Math.max(result, highestProductOfTwo * num, lowestProductOfTwo * num);

    highestProductOfTwo = Math.max(highestProductOfTwo, highest * num, lowest * num);
    lowestProductOfTwo = Math.min( lowestProductOfTwo, highest * num, lowest * num);
    highest = Math.max(highest, num);
    lowest = Math.min(lowest, num);
  }

  return result;
};

var nums = [1, 10, -5, 1, -100];
console.log(highestProductOfThree(nums));

// 3 largest numbers 
// OR two largest negative numbers and largest positive number;