"use strict";
const Queue = require("../stacksAndQueues/Queue");

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class BinaryTree {
  constructor(root) {
    this.array = [];
    this.max = null;
    this.root = root;
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
  findMaximumValue(value = this.root) {
    if (!this.root) {
      throw new Error("your tree is empty");
    }
    //variable temp will store temp's data
    if (!this.max) {
      this.max = this.root.value;
    }
    if (value.left) {
      this.findMaximumValue(value.left);
    }
    if (value.value > this.max) {
      this.max = value.value;
    }
    if (value.right) {
      this.findMaximumValue(value.right);
    }
    if (value.value > this.max) {
      this.max = value.value;
    }
    return this.max;
  }
  breadthFirst() {
    if (!this.root) throw new Error("tree is empty");
    let breadthArr = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      if (queue.top.value.left) {
        queue.enqueue(queue.top.value.left);
      }
      if (queue.top.value.right) {
        queue.enqueue(queue.top.value.right);
      }
      breadthArr.push(queue.dequeue().value);
    }
    return breadthArr;
  }

  fizzBuzz(tree) {
    this.root = tree.root;
    const fizzBuzzTree = (node) => {
      if (fizzBuzzTree(node.value % 15 === 0)) {
        return (node.value = "FizzBuzz");
      } else if (fizzBuzzTree(node.value % 5 === 0)) {
        return (node.value = "Buzz");
      } else if (fizzBuzzTree(node.value % 3 === 0)) {
        return (node.value = "Fizz");
      } else node.val = `${node.value}`;
      if (node.children.length) {
        for (let i = 0; i < node.children.length; i++) {
          fizzBuzzTree(node.children[i]);
        }
      }

      fizzBuzzTree(this.root);
    };
  }
}

module.exports = BinaryTree;
