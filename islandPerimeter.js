/**
 * @param {number[][]} grid
 * @return {number}
 */

const islandPerimeter = (grid) => {
  let perimeter = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let square = grid[i][j];
      
      //if the square = 0, continue;
      if (!square) continue;
      
      if (grid[i - 1] === undefined || !grid[i - 1][j]) perimeter++;
      if (grid[i + 1] === undefined || !grid[i + 1][j]) perimeter++;
      if (!grid[i][j - 1]) perimeter++;
      if (!grid[i][j + 1]) perimeter++;
    }
  }

  return perimeter;
};