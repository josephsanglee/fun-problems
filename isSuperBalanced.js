class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const isSuperBalanced = (rootNode) => {
  const nodesStack = [{node: rootNode, depth: 0}];
  let maxDepth = 0;

  while (nodesStack.length) {
    let nodeTuple = nodesStack.pop();
    let node = nodeTuple.node;
    let depth = nodeTuple.depth;

    if (node.right || node.left) {
      if (node.right) nodesStack.push({ node: node.right, depth: ++depth, });
      if (node.left) nodesStack.push({ node: node.left, depth: ++depth, });
    } else {
      if (maxDepth - depth > 1) return false;

      maxDepth = Math.max(maxDepth, depth);
    }
  }


  return true;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node4.left = node5;

console.log(isSuperBalanced(node1)); //false