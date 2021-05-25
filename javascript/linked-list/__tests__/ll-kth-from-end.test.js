"use strcit";

const LinkedList = require("../LinkedList");

describe("Linked list kth from end", () => {
  it("Where k is greater than the length of the linked list", () => {
    //arrang
    let linkedList = new LinkedList();
    //act
    linkedList.insert(100);
    linkedList.insert(200);
    linkedList.insert(300);
    linkedList.append(1000);
    //assert

    expect(linkedList.kthFromEnd(5)).toEqual("Exception");
  });
  it("Where k and the length of the list are the same", () => {
    //arrang
    let linkedList = new LinkedList();
    //act
    linkedList.insert(100);
    linkedList.insert(200);
    linkedList.append(10);
    //assert

    expect(linkedList.kthFromEnd(2)).toEqual(100);
  });
  it("Where k is not a positive integer", () => {
    //arrang
    let linkedList = new LinkedList();
    //act
    linkedList.insert(100);
    linkedList.insert(200);
    linkedList.append(10);
    //assert
    expect(linkedList.kthFromEnd(-1)).toEqual("Exception");
  });
  it("Where the linked list is of a size 1", () => {
    //arrang
    let linkedList = new LinkedList();
    //act
    linkedList.insert(100);
    //assert
    expect(linkedList.kthFromEnd(0)).toEqual(100);
  });
  it("Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    //arrang
    let linkedList = new LinkedList();
    //act
    linkedList.insert(100);
    linkedList.insert(200);
    linkedList.append(10);
    //assert
    expect(linkedList.kthFromEnd(1)).toEqual(200);
  });
});
