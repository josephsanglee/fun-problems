class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// value = value that you're looking for
// head = first node of the linked list
const kthToLastNode = (k, head) => {
  // iterate through entire list and get a count of all the nodes in the list
  let length = 0;
  let currNode = head;

  while (currNode) {
    length++;
    currNode = currNode.next;
  }

  currNode = head;
  let distanceLeft = length - k;
  while (currNode) {
    if (!distanceLeft--) break;

    currNode = currNode.next;
  }

  return currNode;
};
var a = new LinkedListNode('Angel Food');
var b = new LinkedListNode('Bundt');
var c = new LinkedListNode('Cheese');
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a)); // Devil's Food