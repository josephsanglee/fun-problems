/**
 * @param {number} n
 * @return {number}
 */
 
/*
DP solution

Imagine you're trying to find the least amount of squares that sum to 12.
Using the largest square (i.e., 9 in this case) doesn't necessarily lead
to the smallest number of squares. The answer in this case would be:

12 = 9 + 1 + 1 + 1

Is there a shorter answer? Yes.

12 = 4 + 4 + 4

This approach checks the least number of squares for every number 
nCountOfSquares[i - j*j] + 1 to check if that could be the best answer.
So, for j = 2, nCountOfSquares[12 - 2*2] = nCountOfSquares[8] = 2, which is:

8 = 4 + 4

Therefore, the least possible number of squares would be 1 plus the least number
of squares that add up to 8. So nCountOfSquares[12] = 3.
*/

const numSquares = (n) => {
  // Create an array of size n + 1 where the value at i
  // represents the least amount of perfect squares needed to
  // sum to i (hence why nCountOfSquares[0] = 0).
  let nCountOfSquares = new Array(n + 1);
  nCountOfSquares[0] = 0;
  nCountOfSquares.fill(Infinity, 1);
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; (j * j) <= i; j++) {
      nCountOfSquares[i] = Math.min(nCountOfSquares[i], nCountOfSquares[i - (j * j)] + 1);
    }
  }
  
  return nCountOfSquares[n];
};