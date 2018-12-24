class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
      return this.queue;
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    size() {
      return this.queue.length;
    }
  
    isEmpty() {
      return this.queue.length == 0;
    }
  
    print() {
      return this.queue;
    }
  }

  class Stack {
    constructor() {
      this.stack = [];
    }
    
    push(element) {
      this.stack.push(element);
      return this.stack;
    }
    
    pop() {
      return this.stack.pop();
    }
    
    peek() {
      return this.stack[this.stack.length - 1];
    }
    
    size() {
      return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }
  
    print() {
      console.log(this.stack);
    }
  }

  module.exports.Queue = Queue;
  module.exports.Stack = Stack;