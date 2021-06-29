"use strict";

const treeInterSection = require("../treeIntersection.js");
const BinaryTree = require("../../tree/binarySearchTree");
const Node = require("../../hashTables/Node");

describe("tree intersection", () => {
  it("Can find duplicates", () => {
    const tree1 = new BinaryTree();

    tree1.root = new Node(10);
    tree1.root.left = new Node(20);
    tree1.root.left.left = new Node(30);
    tree1.root.left.right = new Node(40);
    tree1.root.left.right.left = new Node(50);
    tree1.root.left.right.right = new Node(60);
    tree1.root.right = new Node(70);
    tree1.root.right.left = new Node(80);
    tree1.root.right.right = new Node(90);
    tree1.root.right.right.left = new Node(100);
    tree1.root.right.right.right = new Node(110);

    const tree2 = new BinaryTree();

    tree2.root = new Node(10);
    tree2.root.left = new Node(30);
    tree2.root.left.left = new Node(50);
    tree2.root.left.right = new Node(70);
    tree2.root.left.right.left = new Node(90);
    tree2.root.left.right.right = new Node(110);
    tree2.root.right = new Node(130);
    tree2.root.right.left = new Node(150);
    tree2.root.right.right = new Node(170);
    tree2.root.right.right.left = new Node(190);
    tree2.root.right.right.right = new Node(210);

    const results = treeInterSection(tree1, tree2);

    expect(results).toEqual([10, 30, 50, 70, 90, 110]);
  });
  it("return undefined if there is no dublicates", () => {
    const tree3 = new BinaryTree();

    tree3.root = new Node(10);
    tree3.root.left = new Node(20);
    tree3.root.left.left = new Node(30);

    const tree4 = new BinaryTree();

    tree4.root = new Node(40);
    tree4.root.left = new Node(50);
    tree4.root.left.left = new Node(60);

    let results = treeInterSection(tree3, tree4);
    let expected = undefined;

    expect(expected).toEqual(results);
  });
});
