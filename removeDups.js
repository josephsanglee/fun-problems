//given a LinkedList class..

const removeDups = (linkedList) => {
  const values = {};
  let node = linkedList.head;

  while (node.next !== null) {
    if (values[node.value]) {
      node.next
    } else {
      values[node.value] = true;
    }
  }
};