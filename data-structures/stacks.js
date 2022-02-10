var myStack = function () {
  this.count = 0; // to keep a track of the count of elements
  this.storage = {}; // the stack

  //add a element at the end of the stack and return the updated stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
    return this.storage;
  };

  // delete last element of the stack and return the element
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  // return the size of the stack
  this.size = function () {
    return this.count;
  };

  // return the last element in the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var stack = new myStack();

// stack.push(1);
// stack.push(2);
// stack.pop(2);
// stack.peek();
// stack.push(3);
// stack.push(5);
// stack;
// console.log(stack.size());
