"use strict";
const BinarySearchTree = require("../binarySearchTree");
const BinaryTree = require("../tree");
const { expect } = require("@jest/globals");

let binarySearchTree = new BinarySearchTree();

beforeEach(() => {
  binarySearchTree = new BinarySearchTree();
});

describe("Binary tree and binary search tree", () => {
  it("should successfully instantiate an empty tree", () => {
    expect(binarySearchTree.root).toEqual(null);
  });
  it("should successfully instantiate a tree with a single root node", () => {
    binarySearchTree.add(5);
    expect(binarySearchTree.root.value).toEqual(5);
    expect(binarySearchTree.left).toBeFalsy();
    expect(binarySearchTree.right).toBeFalsy();
  });
  it("should successfully add a left child and right child to a single root node", () => {
    binarySearchTree.add(5);
    binarySearchTree.add(3);
    binarySearchTree.add(7);

    expect(binarySearchTree.root.value).toEqual(5);
    expect(binarySearchTree.root.left.value).toEqual(3);
    expect(binarySearchTree.root.right.value).toEqual(7);
  });
  it("should successfully return a collection from a preorder traversal", () => {
    binarySearchTree.add(3);
    binarySearchTree.add(1);
    binarySearchTree.add(5);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    let binaryTree = new BinaryTree();
    expect(binaryTree.preOrder(binarySearchTree.root)).toEqual([3, 1, 5, 4, 6]);
  });
  it("should successfully return a collection from an inorder traversal", () => {
    binarySearchTree.add(3);
    binarySearchTree.add(1);
    binarySearchTree.add(5);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    let binaryTree = new BinaryTree();
    expect(binaryTree.inOrder(binarySearchTree.root)).toEqual([1, 3, 4, 5, 6]);
  });
  it("should successfully return a collection from a postorder traversal", () => {
    binarySearchTree.add(3);
    binarySearchTree.add(1);
    binarySearchTree.add(5);
    binarySearchTree.add(4);
    binarySearchTree.add(6);
    let binaryTree = new BinaryTree();
    expect(binaryTree.postOrder(binarySearchTree.root)).toEqual([
      1, 4, 6, 5, 3,
    ]);
  });
});
