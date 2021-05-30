"use strict";

const Stack = require("../stacksAndQueues/Stack");

class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }
  enqueue(value) {
    this.pushStack.push(value);
  }
  dequeue() {
    if (this.empty()) {
      return "Exception";
    }
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }

    return this.popStack.pop();
  }
  peek() {
    if (this.empty()) {
      return "Exception";
    }
    if (this.popStack.isEmpty()) {
      while (!this.pushStack.isEmpty()) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.peek();
  }
  empty() {
    return this.popStack.isEmpty() && this.pushStack.isEmpty();
  }
}

module.exports = PseudoQueue;
