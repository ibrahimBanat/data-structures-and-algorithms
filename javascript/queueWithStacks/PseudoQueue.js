"use strict";

const Stack = require("../stacksAndQueues/Stack");

class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }
  /**
   * method for adding items to the queue.
   * @param {any} value method for pushing elements to the queue.
   */
  enqueue(value) {
    this.pushStack.push(value);
  }
  /**
   * method for removing the first element entered the queue.
   * @returns {Object} removedElement: the removed element
   */
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
  /**
   * method returning the first element enqueued without removing it.
   * @returns the first element entered the queue.
   */
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
  /**
   * method for checking if the queue is empty or not.
   * @returns {boolean}
   */
  empty() {
    return this.popStack.isEmpty() && this.pushStack.isEmpty();
  }
}

module.exports = PseudoQueue;
