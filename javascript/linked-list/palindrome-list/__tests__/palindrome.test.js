"use strict";

const LinkedList = require("../../LinkedList");
const isPalindrome = require("../palindrome");

describe("palindrome linked list", () => {
  //arrange
  it("should return true for palindrome linkedlist", () => {
    let linkedList = new LinkedList();
    //act
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(2);
    linkedList.append(1);

    //assert
    expect(isPalindrome(linkedList.head)).toBe(true);
  });
  it("should handle odd linked list", () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(1);
    expect(isPalindrome(linkedList.head)).toBe(true);
  });
  it("should return false for even non palindrome linked-list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    expect(isPalindrome(linkedList.head)).toBe(false);
  });
  it("should return false for even non palindrome linked-list", () => {
    let linkedList = new LinkedList();

    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);
    expect(isPalindrome(linkedList.head)).toBe(false);
  });
  it("should handle empty list", () => {
    let linkedList = new LinkedList();

    expect(isPalindrome(linkedList.head)).toBe(true);
  });
  it("should handle list with one node", () => {
    let linkedList = new LinkedList();
    linkedList.insert(5);
    expect(isPalindrome(linkedList.head)).toBe(true);
  });
});
