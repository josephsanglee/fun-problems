function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const isBST = (node, min = -Infinity, max = Infinity) => {
  //if the node is null, that means we're checking a leaf node's
  //children, which means which reached the end of the 
  if (!node) return true;
  
  if (node.value > max || node.value < min) return false;
  
  return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
};

var tree = new BinaryTreeNode(10);
var leftSubtree = tree.insertLeft(5);
var rightSubtree = tree.insertRight(15);
leftSubtree.insertLeft(2);
leftSubtree.insertRight(6);
rightSubtree.insertLeft(13);
var rightSubtreeLeaf = rightSubtree.insertRight(16);
console.log(isBST(tree)); //true;