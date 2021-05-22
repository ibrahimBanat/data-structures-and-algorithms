"use strict";

// Require our linked list implementation
const LinkedLilst = require("../LinkedList");
const Node = require("../Node");

describe("Linked List", () => {
  it("works", () => {
    expect(true).toBeTruthy();
  });
});

describe("node", () => {
  it("creates an object", () => {
    //arrange
    let value = "ibrahim";
    //act
    let node = new Node(value);
    //assert
    expect(node.value).toEqual(value);
    expect(node.next).toEqual(null);
  });
});
