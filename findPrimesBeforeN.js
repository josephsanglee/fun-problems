/*****
Find all primes below and including a number up to N.

This code uses the Sieve of Eratosthenes algorithm to 
solve for the problem in O(n) time complexity. By iterating
******/

let findAllPrimes = (n) => {
  const primes = [];
  const range = [];
  
  //Pre-populate the array from range 0 to and including n with boolean values
  for (let i = 0; i <= n; i++) {
    range[i] = true;
  }

  //Iterates through every number starting at 2 (the first
  //prime number) less than or equal to n and checks if 
  //the value at position i is true
  for (let i = 2; i <= n; i++) {
    //If the value at index i is true, that means that i is a prime 
    //number. If it was not a prime number, the value would have been 
    //switched to false by the loop below (explanation below)
    if (range[i]) {
      primes.push(i);

      //Iterates through the range and checks if j is divisible by i.
      //If so, that means that j is not a prime number, and the boolean
      //value at j will switch to false.
      for (let j = i + i; j <= n; j += i) {
        if (range[j]) range[j] = !range[j];
      }
    }
  }

  return primes.length;
};

// Time Complexity: O(n)
// 

console.log(findAllPrimes(100)); // 25
console.log(findAllPrimes(101)); //26