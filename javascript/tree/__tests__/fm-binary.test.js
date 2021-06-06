"use strict";

const Node = require("../node");
const BTree = require("../tree");
let { expect } = require("@jest/globals");

describe("find maximum binary tree", () => {
  it("should return the maximum in given binary tree", () => {
    let node1 = new Node(2);
    let node2 = new Node(7);
    let node3 = new Node(5);
    let node4 = new Node(6);
    let node5 = new Node(2);
    let node6 = new Node(11);
    let node7 = new Node(5);
    let node8 = new Node(9);
    let node9 = new Node(4);
    //act
    node1.left = node2;
    node2.left = node5;
    node2.right = node4;
    node4.left = node3;
    node4.right = node6;
    node1.right = node7;
    node7.right = node8;
    node8.right = node9;
    let maximum = new BTree(node1);

    expect(maximum.findMaximumValue()).toEqual(11);
  });
  it("should return exception when given empty tree", () => {
    let max = new BTree();
    expect(max.findMaximumValue).toThrowError();
  });
});
