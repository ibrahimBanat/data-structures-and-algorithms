"use strict";
/**
 * creates a node object with a value and a empty pointer to the next node.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = Node;
