const Queue = function() {
  this.stackA = [];
  this.stackB = [];
};

//queue is FIFO


//stack is LIFO

//when an element is added to our Queue we can add all elements to one stack
//when you dequeue, you can pop off all the elements in the first stack

Queue.prototype.enqueue = function(value) {
  this.stackA.push(value);
};

Queue.prototype.dequeue = function() {
  while (this.stackA.length > 0) {
    this.stackB.push(this.stackA.pop());
  }

  var value = this.stackB.pop();

  while (this.stackB.length > 0) {
    this.stackA.push(this.stackB.pop());
  }

  return value;
};

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());