//this class will return a binary min heap!
//switch the compares for binary max heap
class BinaryHeap {
  constructor() {
    this._heap = [];
  }

  getRoot() {
    return this._heap[0];
  }

  getSize() {
    return this._heap.length;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getChildrenIndices(index) {
    return [(index + 1) * 2 - 1, (index + 1) * 2];
  }

  switchValues(a, b) {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
  }

  // parent index for any node is Math.floor((n - 1) / 2);
  insert(value) {
    //insert node into the heap
    this._heap.push(value);

    //if the node is less than its parent node, switch it
    let node = this.getSize() - 1;
    let parent = Math.floor(node / 2);

    while (this._heap[parent] > this._heap[node]) {
      this.switchValues(parent, node);
      [node, parent] = [parent, Math.floor(parent / 2)];
    }
  }


  removeRoot() {
    this.switchValues(0, this.getSize() - 1);

    //index of the current node and the indices of its children nodes in the binary heap
    let node = 0;
    let children = this.getChildrenIndices(node);

    while (true) {
      if (this._heap[node] > this._heap[children[0]]) {
        this.switchValues(node, children[0]);

        node = children[0];
        children = this.getChildrenIndices(node);
      } else if (this._heap[node] > this._heap[children[1]]) {
        this.switchValues(node, children[1]);

        node = children[1];
        children = this.getChildrenIndices(node);
      } else {
        break;
      }
    }

    return this._heap.pop();
  }
}



const binaryHeap = new BinaryHeap();
binaryHeap.insert(12);
binaryHeap.insert(11);
binaryHeap.insert(5);
binaryHeap.insert(4);
binaryHeap.insert(3);
binaryHeap.insert(1);
console.log(binaryHeap._heap);
binaryHeap.removeRoot();
console.log(binaryHeap._heap);
binaryHeap.removeRoot();
console.log(binaryHeap._heap);
binaryHeap.removeRoot();
console.log(binaryHeap._heap);