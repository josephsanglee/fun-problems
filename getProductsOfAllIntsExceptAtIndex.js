/*
You have an array of integers, and for each index you want to find 
the product of every integer except the integer at that index.

getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]) // [84, 12, 28, 21];
*/


const getProductsOfAllIntsExceptAtIndex = (nums) => {
  let product = 1;

  const products = [];

  //multiply every number at index i by the 
  //product of all of the numbers before index i
  for (let i = 0; i < nums.length; i++) {
    products.push(product);
    product *= nums[i];
  }

  //reset the product
  product = 1;

  //multiply every number at index i by the
  //product of all of the numbers after index i
  for (let i = nums.length - 1; i > -1; i--) {
    products[i] = products[i] * product;

    product *= nums[i];
  }


  return products;
};

// O(n) time complexity
console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])); // [84, 12, 28, 21]