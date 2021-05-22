"use strict";

const LinkedList = require("../LinkedList");
const LinkedListError = require("../errors/linkedListError");

describe("Linked list class", () => {
  it("Can successfully instantiate an empty linked list", () => {
    //arrange
    let value = 5;
    let linkedList = new LinkedList();
    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toEqual(null);
  });

  it("Can properly insert into the linked list", () => {
    //arrange
    let value = 15;
    let linkedList = new LinkedList();
    linkedList.insert(5);

    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.head.next.value).toEqual(value);
    expect(linkedList.head.next.next).toEqual(null);
  });
  it("The head property will properly point to the first node in the linked list", () => {
    //arrange
    let value = 625;

    //act
    let linkedList = new LinkedList();
    linkedList.insert(value);
    linkedList.insert(250);
    linkedList.insert(250);
    //assert
    expect(linkedList.head).toBeTruthy();
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toBeTruthy();
  });
  it("Can properly insert multiple nodes into the linked list", () => {
    //arrange
    let value = 15;
    let linkedList = new LinkedList();
    linkedList.insert(5);
    linkedList.insert(10);
    //act
    linkedList.insert(value);
    //assert
    expect(linkedList.head.next.next.value).toEqual(value);
    expect(linkedList.head.next.next.next).toEqual(null);
  });

  it("Will return true when finding a value within the linked list that exists", () => {
    //arrange
    let value = 15;
    let linkedList = new LinkedList();
    //act
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.insert(15);
    linkedList.insert(25);

    //assert
    expect(linkedList.includes(value)).toBe(true);
  });
  it("Will return false when searching for a value in the linked list that does not exist", () => {
    //arrange
    let value = 2;
    let linkedList = new LinkedList();
    //act
    linkedList.insert(20);
    linkedList.insert(30);
    linkedList.insert(15);
    linkedList.insert(25);

    //assert
    expect(linkedList.includes(value)).toBe(false);
  });
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    //arrange
    let linkedList = new LinkedList();
    //act
    linkedList.insert("hello");
    linkedList.insert("my");
    linkedList.insert("name");
    linkedList.insert(10);
    linkedList.insert(20);
    //assert
    expect(linkedList.toString()).toEqual(
      "{ hello } ⇨ { my } ⇨ { name } ⇨ { 10 } ⇨ { 20 } ⇨ { null }"
    );
  });
  it("Can properly create a new head even if head is exist", () => {
    //arrange
    let linkedList = new LinkedList();
    let value = 70;
    linkedList.insert(10);
    linkedList.insert(30);
    linkedList.insert(50);
    //act
    linkedList.addNewHead(value);
    //assert
    expect(linkedList.head).toBeTruthy();
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next.value).toEqual(10);
  });
});
