/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
  if (!matrix.length) return [];

  let spiralNums = [];
  let topRowIndex = 0;
  let botRowIndex = matrix.length - 1;
  let leftColIndex = 0;
  let rightColIndex = matrix[0].length - 1;
  let i = 0;

  while (topRowIndex <= botRowIndex && leftColIndex <= rightColIndex) {
    //iterate through top row of remaining rows
    //from left to right
    for (i = leftColIndex; i <= rightColIndex; i++) {
      spiralNums.push(matrix[topRowIndex][i]);
    }
    topRowIndex++;
    
    //iterate through right column from remaining columns
    //from top to bottom
    for (i = topRowIndex; i <= botRowIndex; i++) {
      spiralNums.push(matrix[i][rightColIndex]);
    }
    rightColIndex--;
    
    //iterate through bot row from remaining rows
    //from right to left
    if (topRowIndex <= botRowIndex) {
      for (i = rightColIndex; i >= leftColIndex; i--) {
        spiralNums.push(matrix[botRowIndex][i]);
      }

      botRowIndex--;
    }
    
    //iterate through left col from remaining columns
    //from bottom to top
    if (leftColIndex <= rightColIndex) {
      for (i = botRowIndex; i >= topRowIndex; i--) {
        spiralNums.push(matrix[i][leftColIndex]);
      }

      leftColIndex++;
    }
    
  }

  return spiralNums;
};
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralOrder(matrix1)); // [1,2,3,6,9,8,7,4,5];