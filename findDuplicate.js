/*
In an array ranging from 0 to n, find the number that is duplicated.
*/

const findDuplicate = (array, n) => {
  let totalSum = 0;
  
  for (var i = 1; i <= n; i++) {
    totalSum += i;
  }
  console.log(totalSum);
  let arraySum = array.reduce((a, b) => a + b);

  return arraySum - totalSum;
};


const nums = [1, 2, 3, 3, 4, 5];
console.log(findDuplicate(nums, 5));