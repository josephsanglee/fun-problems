class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

deleteNode = (node) => {
  let nextNode = node.next;

  if (nextNode) {
    node.value = nextNode.value;
    node.next = nextNode.next;
  } else {
    throw new Error("Can't delete the node with this method!");
  }
};

let a = new LinkedListNode('A');
let b = new LinkedListNode('B');
let c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);