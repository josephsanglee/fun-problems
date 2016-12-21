const findLargest = function(rootNode) {
  if (!rootNode) {
    throw new Error('Tree must have at least 1 node');
  }

  if (rootNode.right) {
    return findLargest(rootNode.right);
  }

  return rootNode.value;
};

const findSecondLargest = function(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  // case 1: currently at the largest, and
  // a left subtree exist. Second largest is
  // largest in the left subtree
  if (rootNode.left && !rootNode.right) {
    return findLargest(rootNode.left);
  }

  // case 2: currently at the second largest,
  // and the largest node has no left subtree,
  // so second largest must be the current node
  if (rootNode.right && !rootNode.right.left && !rootNode.right.right) {
    return rootNode.value;
  }

  return findSecondLargest(rootNode.right);
};

