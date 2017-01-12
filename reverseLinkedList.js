// Reverse a linked list.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node || null;
    this.tail = node || null;
  }

  addToHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    [this.head, this.head.next] = [node, this.head];
  }

  addToTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }

    [this.tail.next, this.tail] = [node, node];
  }

  printNodes() {
    let node = this.head;

    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
  }
}

LinkedList.prototype.reverse = function() {
  // set the initial prev value to null, since the
  // head of a linked list is the first value. switch
  // the head and tail values so the linked list points
  // at the correct nodes
  let prev = null;
  let node = this.head;
  [this.head, this.tail] = [this.tail, this.head];

  // while the current node we're looking at is not node, aka
  // we have not yet reached the tail of the linked list, continue
  // switching node.next of the current node to the previous node
  while (node !== null) {
    let nextNode = node.next;
    node.next = prev;
    [node, prev] = [nextNode, node];
  }
};

var node1 = new Node(12);
var node2 = new Node(15);
var node3 = new Node(18);
var node4 = new Node(20);
var list = new LinkedList(node1);
list.addToTail(node2);
list.addToTail(node3);
list.addToTail(node4);
list.reverse();
list.printNodes();
