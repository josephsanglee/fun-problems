/*
  Write a function containsCycle() that takes the first node
  in a singly-linked list and returns a boolean indicating 
  whether the list contains a cycle.
*/
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const containsCycle = (headNode) => {
  let slowRunner = headNode.next;
  let fastRunner = headNode.next.next;

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if (slowRunner === fastRunner) return true;
  }


  return false;
};

let a = new LinkedListNode('a');
let b = new LinkedListNode('b');
let c = new LinkedListNode('c');
let d = new LinkedListNode('d');
let e = new LinkedListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(containsCycle(a)); //true