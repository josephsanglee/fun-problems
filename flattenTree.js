class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}


const flattenTree = (node) => {
  //head and tail of current 'linked list';
  let rightNode = node;
  let leftNode = node;

  if (node.left) {
    let flattenedLeft = flattenTree(node.left);
    node.left = flattenedLeft[1];
    flattenedLeft[1].right = node;
    leftNode = flattenedLeft[0];
  }

  if (node.right) {
    let flattenedRight = flattenTree(node.right);
    node.right = flattenedRight[0];
    flattenedRight[0].left = node;
    rightNode = flattenedRight[1];
  }


  //head and tail of linked list, respectively
  return [leftNode, rightNode];
};

const outputLinkedList = (headAndTail) => {
  const head = headAndTail[0];
  const tail = headAndTail[1];
  let vals = [];

  let node = head;

  while (node) {
    vals.push(node.val);
    node = node.right;
  }

  return console.log(vals);
};

let rootNode = new Node(1);
let leftTree = new Node(2);
let rightTree = new Node(3);
rootNode.left = leftTree;
rootNode.right = rightTree;
rootNode.left.left = new Node(4);
rootNode.left.right = new Node(5);
rootNode.right.left = new Node(6);
rootNode.right.right = new Node(7);

const flattenedTree = flattenTree(rootNode);
outputLinkedList(flattenedTree); // 4 -> 2 -> 5 -> 1 -> 6 -> 3 -> 7