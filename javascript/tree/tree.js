"use strict";
const Node = require("./node");

class BinaryTree {
  constructor(root) {
    this.root = root;
    this.array = [];
  }
  preOrder(root) {
    //P -> L -> R
    if (root !== null) {
      this.array[this.array.length] = root.value;
      this.preOrder(root.left);
      this.preOrder(root.right);
      let preOrdered = this.array;
      this.array = [];
      return preOrdered;
    }
  }
  postOrder(root) {
    //L -> R -> P
    this.postOrder(root.left);
    this.postOrder(root.right);
    this.array[this.array.length] = root.value;
  }
  inOrder(root) {
    // L -> P -> R
    this.inOrder(root.left);
    this.array[this.array.length] = root.value;
    this.inOrder(root.right);
  }
}
module.exports = BinaryTree;
