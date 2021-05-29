" use strict";
const Node = require("./Node");

/**
 * creates a queue with a storage and pointers to the elements in the storage
 */
class Queue {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.storage = {};
  }
  /**
   *
   * @param {any} value method for pushing elements to the queue.
   */
  enqueue(value) {
    let node = new Node(value);
    this.storage[this.top] = node;
    this.top++;
  }
  /**
   * method for removing the first element entered the queue.
   * @returns {Object} removedElement: the removed element
   */
  dequeue() {
    try {
      this.emptyException();
      let removedElement = this.storage[this.bottom];
      delete this.storage[this.bottom];
      this.bottom++;
      return removedElement;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * method returning the first element enqueued without removing it.
   * @returns the first element entered the queue.
   */
  peek() {
    try {
      this.emptyException();
      return this.storage[this.bottom];
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * method for calculating the size the queue.
   * @returns {Number} returns the number of elements in the queue.
   */
  size() {
    return this.top - this.bottom;
  }
  /**
   * method for checking if the queue is empty or not.
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }
  /**
   * method throwing an exception if the peek() or dequeue called on an empty queue
   */
  emptyException() {
    if (this.isEmpty()) {
      throw new Error("queue is empty !!");
    }
  }
}
module.exports = Queue;
