/*****
Find all primes below and including a number up to N.
******/

let findAllPrimes = (n) => {
  const primes = [];
  const range = [];
  
  //pre-populate the array with boolean values
  for (let i = 0; i <= n; i++) {
    range[i] = true;
  }

  //start at 2 because 2 is the first prime number
  for (let i = 2; i <= n; i++) {
    if (range[i]) {
      primes.push(i);

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