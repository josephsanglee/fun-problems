/**

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.Find all 
the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

 * @param {number[]} nums
 * @return {number[]}
 **/


var findDuplicates = function(nums) {
  const results = [];

  //iterate through all of the values in the nums array
  for (let i = 0; i < nums.length; i++) {
    //if the number at index i is currently negative, 
    //get absolute value of the number at index i 
    let num = nums[i] < 0 ? Math.abs(nums[i]) : nums[i];

    //if the number at index num-1 is negative, that means
    //that the number at the current index has been seen before
    //therefore, we push the current number into the array.
    if (nums[num - 1] < 0) results.push(num);
    //if the number at the current index has NOT been seen before,
    //then we make the number at index num-1 negative to indicate
    //that we have seen the num before. Why do we switch the number
    //at index num-1 and not index num? because arrays start at 0!
    else nums[num - 1] = nums[num - 1] * -1;
  }

  return results;
};