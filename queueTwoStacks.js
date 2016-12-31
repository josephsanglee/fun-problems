const Queue = function() {
  this.inStack = [];
  this.outStack = [];
};

//queue is FIFO


//stack is LIFO

//when an element is added to our Queue we can add all elements to one stack
//when you dequeue, you can pop off all the elements in the first stack

Queue.prototype.enqueue = function(value) {
  this.inStack.push(value);
};

/*******
this implementation of dequeue results in AMORTIZED CONSTANT TIME. Why?
on average, a dequeue function invocation will result in a O(1) operation.
Though sometimes it will be O(n), that all depends on the number of items
in the inStack. To think of the time complexity of this operation, think 
about it in terms of the time cost for EACH VALUE. Each value gets:

Pushed to the inStack.
Popped from the inStack.
Pushed to the outStack.
Popped from the outStack.

That's 4 O(1) operations, so O(1) time complexity overall!
*******/
Queue.prototype.dequeue = function() {
  //only repopulate the outStack if it is empty
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }

  return this.outStack.pop();
};

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());