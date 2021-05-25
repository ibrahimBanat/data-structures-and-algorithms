"use strict";
const LinkedList = require("../LinkedList");
describe("linked list insertion", () => {
  it("Can successfully add a node to the end of the linked list", () => {
    //arrange

    let ll = new LinkedList();
    //act
    ll.insert(10);
    ll.insert(20);
    ll.append(30);

    //assert
    expect(ll.toString()).toEqual("{ 10 } ⇨ { 20 } ⇨ { 30 } ⇨ { null }");
  });

  it("Can successfully add multiple nodes to the end of a linked list", () => {
    //arrange

    let ll = new LinkedList();
    //act
    ll.insert(10);
    ll.insert(20);
    ll.append(30);
    ll.append(40);
    ll.append(50);
    //assert
    expect(ll.toString()).toEqual(
      "{ 10 } ⇨ { 20 } ⇨ { 30 } ⇨ { 40 } ⇨ { 50 } ⇨ { null }"
    );
  });

  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.insertBefore(20, 15);
    //assert
    let inserted = linkedList.toString();
    let array = inserted.split(" ⇨ ");

    expect(array[2]).toEqual("{ 15 }");
  });
  it("Can successfully insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedList();

    linkedList.append(10);
    linkedList.append(20);
    linkedList.insertBeafore(0, 10);

    let inserted = linkedList.toString();
    let array = inserted.split(" ⇨ ");

    expect(array[0]).toEqual("{0}");
  });
  it("Can successfully insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.insertAfter(20, 25);

    let inserted = linkedList.toString();
    let array = inserted.split(" ⇨ ");

    expect(array[2]).toEqual("{ 30 }");
  });
  it("Can successfully insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.append(35);

    expect(linkedList.toString()).toEqual(
      "{ 10 } ⇨ { 20 } ⇨ { 30 } ⇨ { 35 } ⇨ { null }"
    );
  });
});
