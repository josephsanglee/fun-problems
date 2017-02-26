/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} rootNode
 * @return {number[]}
 */
 
// const largestValues = (rootNode) => {
//   if (!rootNode) return [];
  
//   //just for the sake of not having to create a doubly linked list class right now
//   let queueOfNodes = [{ node: rootNode, row: 1 }];
//   let results = [];
  
//   while (queueOfNodes.length) {
//     let nodeAndRow = queueOfNodes.shift();
//     let curNode = nodeAndRow.node;
//     let curRow = nodeAndRow.row;
//     let curMax = results[curRow - 1];
    
//     // if the current max for the current row (at index = row - 1) has not been set
//     // or is smaller than the current node's value, then add/replace the current
//     // max value in the results array with the current node's value
//     if (curMax === undefined || curMax < curNode.val) results[curRow - 1] = curNode.val;
    
//     //add the current nodes children to the queue 
//     if (curNode.left) queueOfNodes.push({ node: curNode.left, row: curRow + 1 });
//     if (curNode.right) queueOfNodes.push({ node: curNode.right, row: curRow + 1 });
//   }
  
//   return results;
// };

const largestValues = (node, row = 1, results = []) => {
  if (!node) return results;

  let curMax = results[row - 1];

  if (curMax === undefined || curMax < node.val) results[row - 1] = node.val;

  if (node.left) largestValues(node.left, row + 1, results);
  if (node.right) largestValues(node.right, row + 1, results);


  return results;
};