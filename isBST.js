class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////

//recursive solution (much cuter)
const isBST = (node, min = -Infinity, max = Infinity) => {
  //if the node is null, that means we're checking a leaf node's
  //children, which means all of its parent nodes were valid nodes,
  //so we return true
  if (!node) return true;
  
  //if the value does not satisfy the conditions of a BST, which is that:
  // 1) each left child node must be less than its parent node
  // 2) each right child node must be greater than its parent node
  // 3) each node in the left subtree must be less than (or sometimes equal) the root value
  // 4) each node in the right subtree must be greater than the root value
  //the binary tree is not a valid BST and we return false.
  if (node.value > max || node.value < min) return false;
  
  //recursively call the function for each node in the BST
  return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
};

// //iterative solution
// const isBST = (rootNode) => {
//   const stackOfNodesAndBounds = [{node: rootNode, min: -Infinity, max: Infinity }];

//   while (stackOfNodesAndBounds.length) {
//     let nodeAndBounds = stackOfNodesAndBounds.pop();
//     let { node, min, max } = nodeAndBounds;

//     if (node.value < min || node.value > max) return false;

//     if (node.right) stackOfNodesAndBounds.push({ node: node.right, min: node.value, max: max });
//     if (node.left) stackOfNodesAndBounds.push({ node: node.left, min: min, max: node.value });
//   }

//   return true;
// };

var tree = new BinaryTreeNode(10);
var leftSubtree = tree.insertLeft(5);
var rightSubtree = tree.insertRight(15);
leftSubtree.insertLeft(2);
leftSubtree.insertRight(6);
rightSubtree.insertLeft(13);
var rightSubtreeLeaf = rightSubtree.insertRight(16);
console.log(isBST(tree)); //true;