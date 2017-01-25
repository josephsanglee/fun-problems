// Given the head of a linked list, remove all duplicate nodes if the count is greater than 2.
// Ex: 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 4
// Ex: 1 -> 2 -> 2 -> 3 -> 4
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDups = (head) => {
  let curNode = head;
  let next = curNode.next;
  let count = 1;

  while (next) {
    if (curNode.value === next.value) {
      count++;
      next = next.next;
    } else {
      if (count > 2) {
        curNode.next = next;
      }

      curNode = next;
      next = curNode.next;
      count = 1;
    }
  }

  return head;
};

const printNodes = (head) => {
  let node = head;

  while (node) {
    console.log(node.value);
    node = node.next;
  }
};

let node1 = new LinkedListNode(1);
let node2 = new LinkedListNode(2);
let node3 = new LinkedListNode(2);
let node4 = new LinkedListNode(3);
let node5 = new LinkedListNode(3);
let node6 = new LinkedListNode(3);
let node7 = new LinkedListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

printNodes(node1);
removeDups(node1);
printNodes(node1);