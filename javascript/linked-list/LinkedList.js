"use strict";

const Node = require("./Node");
const LinkedListErrors = require("./errors/linkedListError");

let linkedListError = new LinkedListErrors();

class LinkedList {
  constructor() {
    this.head = null;
  }
  chcekForInput(value) {
    if (value === undefined || value === Infinity) {
      throw linkedListError.notDefinedInput(
        `${value} value are not acceptable as input`
      );
    }
  }
  insert(value) {
    this.chcekForInput(value);

    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
  addNewHead(value) {
    this.chcekForInput(value);
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  includes(value) {
    this.chcekForInput(value);
    let current = this.head;
    let flag = false;
    while (current.next) {
      current = current.next;
      if (current.value === value) {
        flag = true;
        return flag;
      }
    }
    return flag;
  }
  toString() {
    let current = this.head;
    let string = "";
    while (current.next) {
      string = string + `{ ${current.value} } ⇨ `;
      current = current.next;
    }
    string = string + `{ ${current.value} } ⇨ { ${current.next} }`;
    return string;
  }
}

module.exports = LinkedList;
