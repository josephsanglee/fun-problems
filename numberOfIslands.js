/**
 * @param {character[][]} grid
 * @return {number}
 */
 

const traverseIsland = (i, j, grid) => {
  let stack = [[i, j]];

  while (stack.length) {
    let coordinates = stack.pop();
    let i = coordinates[0];
    let j = coordinates[1];
    
    if (i >= 0 && i < grid.length && 
      j >= 0 && j < grid[0].length &&
      grid[i][j] === '1'
    ) {
      grid[i][j] = '0';
      stack.push([i - 1, j]);
      stack.push([i + 1, j]);
      stack.push([i, j - 1]);
      stack.push([i, j + 1]);
    }
  }
};

const numIslands = (grid) => {
  let count = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        traverseIsland(i, j, grid);
        count++;
      }
    }
  }
  
  return count;
};