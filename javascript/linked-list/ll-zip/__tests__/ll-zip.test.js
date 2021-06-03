"use strict";

const LinkedList = require("../../LinkedList");
const zipList = require("../ll-zip");

describe("zip linked list", () => {
  it("Empty linked lists", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();

    expect(zipList(ll1, ll2).toString()).toEqual("Exception");
  });
  it("It should return Exception when the length of the two lists are not equal", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();

    ll1.append(100);
    ll2.append(10);
    ll2.append(20);
    expect(zipList(ll1, ll2).toString()).toEqual("Exception");
  });
  it('return "happy path" with expected linked list', () => {
    let linkedList1 = new LinkedList();
    let linkedList2 = new LinkedList();
    let linkedList3 = new LinkedList();

    linkedList1.append(100);
    linkedList1.append(200);

    linkedList2.append(300);
    linkedList2.append(400);
    console.log("ll2", linkedList2);
    linkedList3.append(100);
    linkedList3.append(200);
    linkedList3.append(400);
    expect(zipList(linkedList1, linkedList2).toString()).toEqual(
      linkedList3.toString()
    );
  });
});
