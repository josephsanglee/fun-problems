const Stack = function() {
  // initialize an empty array
  this.items = [];
};

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {
  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
    return null;
  }

  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
};

const MaxStack = function() {
  this.stack = new Stack();
  this.maxes = new Stack();
};

MaxStack.prototype.push = function(value) {
  this.stack.push(value);

  // if the current value is greater than or equal to the
  // the current max value, push that value in the maxes
  // stack and set a new max value
  if (!this.maxes.peek() || value >= this.maxes.peek()) {
    this.maxes.push(value);
  }
};

MaxStack.prototype.pop = function() {
  var value = this.stack.pop();

  // if the value being popped is equal to the current max
  // value in the maxes stack (the last item), then 
  // pop the value from the maxes stack and set the new 
  // max to the previous item
  if (value === this.maxes.peek()) {
    this.maxes.pop();
  }

  return value;
};

MaxStack.prototype.getMax = function() {
  return this.maxes.peek();
};

var maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(4);
maxStack.push(10);
console.log(maxStack.getMax());
maxStack.pop();
console.log(maxStack.getMax());