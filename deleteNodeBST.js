/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
 
class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = this.left = null;
  }
}

//traverses the BST and finds the node with value === key
const findNode = (rootNode, key) => {
  //if the key is equal to either the value of the left node
  //or the right node of the current parent node, return the parent
  //node and the child node with the value equal to the key
  if (rootNode.left.val === key) return [rootNode, rootNode.left];
  if (rootNode.right.val === key) return [rootNode, rootNode.right];
  
  return rootNode.val > key ? findNode(rootNode.left, key) : findNode(rootNode.right, key);
};

var deleteNode = function(rootNode, key) {
  //traverses the BST and finds the node with value === key
  let parentAndChildNodes = findNode(rootNode, key);
  
  //if the key does not exist, just return the rootNode of the BST
  if (!parentAndChildNodes) return rootNode;
    
  let parentNode = parentAndChildNodes[0];
  let deleteNode = parentAndChildNodes[1];
  let leftChild = deleteNode.left;
  let rightChild = deleteNode.right;
  
  //if the left child does not have its own right child, then the right child of the node
  //to be deleted will become its right child. If it does have its own right child, then the left child
  //will become the left most node found in the left tree of the right child because all of the
  //nodes in the subtrees of the left child will be less than the values in the right child's subtrees
  if (deleteNode.left && !deleteNode.left.right) {
    parentNode.val > deleteNode.val ? parentNode.left = leftChild : parentNode.right = leftChild;
    leftChild.right = rightChild;
  } else if (deleteNode.right) {
    parentNode.val > deleteNode.val ? parentNode.left = rightChild : parentNode.right = rightChild;
        
    let leftSubtree = rightChild.left;
    while (leftSubtree.left) leftSubtree = leftSubtree.left;
        
    leftSubtree.left = leftChild;
  }
    
  return rootNode;
};

const rootNode = new TreeNode(5);
let leftSubtree = new TreeNode(3);
let rightSubtree = new TreeNode(6);
rootNode.left = leftSubtree;
rootNode.right = rightSubtree;
leftSubtree.left = new TreeNode(2);
leftSubtree.right = new TreeNode(4);
rightSubtree.right = new TreeNode(7);

console.log(deleteNode(rootNode, 3));

