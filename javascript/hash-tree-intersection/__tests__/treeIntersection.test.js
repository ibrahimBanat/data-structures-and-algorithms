"use strict";

const treeInterSection = require("../treeIntersection.js");
const trees = require("../tree/tree.js");

describe("tree intersection", () => {
  it("Can find duplicates", () => {
    const tree1 = new trees.BinaryTree();

    tree1.root = new trees.Node(10);
    tree1.root.left = new trees.Node(20);
    tree1.root.left.left = new trees.Node(30);
    tree1.root.left.right = new trees.Node(40);
    tree1.root.left.right.left = new trees.Node(50);
    tree1.root.left.right.right = new trees.Node(60);
    tree1.root.right = new trees.Node(70);
    tree1.root.right.left = new trees.Node(80);
    tree1.root.right.right = new trees.Node(90);
    tree1.root.right.right.left = new trees.Node(100);
    tree1.root.right.right.right = new trees.Node(110);

    const tree2 = new trees.BinaryTree();

    tree2.root = new trees.Node(10);
    tree2.root.left = new trees.Node(30);
    tree2.root.left.left = new trees.Node(50);
    tree2.root.left.right = new trees.Node(70);
    tree2.root.left.right.left = new trees.Node(90);
    tree2.root.left.right.right = new trees.Node(110);
    tree2.root.right = new trees.Node(130);
    tree2.root.right.left = new trees.Node(150);
    tree2.root.right.right = new trees.Node(170);
    tree2.root.right.right.left = new trees.Node(190);
    tree2.root.right.right.right = new trees.Node(210);

    const results = treeInterSection(tree1, tree2);

    expect(results).toEqual([10, 30, 50, 70, 90, 110]);
  });
  it("return undefined if there is no dublicates", () => {
    const tree3 = new trees.BinaryTree();

    tree3.root = new trees.Node(10);
    tree3.root.left = new trees.Node(20);
    tree3.root.left.left = new trees.Node(30);

    const tree4 = new trees.BinaryTree();

    tree4.root = new trees.Node(40);
    tree4.root.left = new trees.Node(50);
    tree4.root.left.left = new trees.Node(60);

    let results = treeInterSection(tree3, tree4);
    let expected = undefined;

    expect(expected).toEqual(results);
  });
});
