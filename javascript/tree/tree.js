"use strict";

class BinaryTree {
  constructor() {
    this.array = [];
  }
  /**
   * traverse through tree in the following order:
   * root node → left node → right node
   * @param {node} root node object with value, left, right attributes
   * @returns array contains preOrdered elements
   */
  preOrder(root) {
    //P -> L -> R
    let preOrdered;
    if (root !== null) {
      this.array.push(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
      preOrdered = this.array;
      return preOrdered;
    }
  }
  /**
   * traverse through tree in the following order:
   *  left node → right node → root node
   * @param {node} root node object with value, left, right attributes
   * @returns array contains postOrdered elements
   */
  postOrder(root) {
    //L -> R -> P
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      this.array[this.array.length] = root.value;
      return this.array;
    }
  }
  /**
   * traverse through tree in the following order:
   *  left node → root node → right node
   * @param {node} root node object with value, left, right attributes
   * @returns array contains inOrdered elements
   */
  inOrder(root) {
    // L -> P -> R
    if (root !== null) {
      this.inOrder(root.left);
      this.array[this.array.length] = root.value;
      this.inOrder(root.right);
      return this.array;
    }
  }
}
module.exports = BinaryTree;
