/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(rootNode, depth = 1, leftMost = { val: 0, depth: 0}) {
  if (!rootNode) return;
  

  //since the left traversal is done first for all nodes, any value
  //that is found at the same depth for the right traversal will NOT
  //be compared to any value from the previous depths that have already
  //been traversed
  findBottomLeftValue(rootNode.left, depth + 1, leftMost);
  
  if (depth > leftMost.depth) {
    leftMost.depth = depth;
    leftMost.val = rootNode.val;
  }
  
  findBottomLeftValue(rootNode.right, depth + 1, leftMost);
  
  return leftMost.val;
};