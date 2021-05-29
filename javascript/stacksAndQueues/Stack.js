"use strict";

const Node = require("./Node");

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
    this.top = {};
  }
  /**
   * method for adding an element to the stack.
   * @param {any} value value of the node the want to enter
   */
  push(value) {
    this.top = new Node(value);
    this.storage[this.size] = this.top;
    this.size++;
  }
  /**
   * method for removing element elements from the stack.
   * @returns the last element entered the stack.
   */
  pop() {
    try {
      this.exceptEmpty();
      let top = this.top;
      delete this.storage[this.size - 1];
      this.size--;
      this.top = this.storage[this.size - 1];
      return top;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * method show the element would be removed next but does not actually remove it.
   * @returns the last element entered the stack.
   */
  peek() {
    try {
      this.exceptEmpty();
      return this.top;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * chech if the stack is empty or not
   * @returns boolean
   */
  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * throw an execpt if pop() or peek() called for an empty stack.
   */
  exceptEmpty() {
    if (this.isEmpty()) {
      throw new Error("can not pop from empty stack");
    }
  }
}

module.exports = Stack;
