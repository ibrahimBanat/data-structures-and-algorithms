"use strict";

const Node = require("./Node");
const LinkedListErrors = require("./errors/linkedListError");

let linkedListError = new LinkedListErrors();

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
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
      this.length++;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length++;
    }
  }
  addNewHead(value) {
    this.chcekForInput(value);
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
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
  append(value) {
    let node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      let desiredNode = this.head;
      while (desiredNode.next) {
        desiredNode = desiredNode.next;
      }
      desiredNode.next = node;
    }
  }
  insertAfter(val, newVal) {
    let node = new Node(newVal);
    let nodeLooper = this.head;
    while (nodeLooper) {
      if (nodeLooper.val === val) {
        let temp = nodeLooper.next;
        this.length++;

        nodeLooper.next = node;
        node.next = temp;
        this.length++;

        return;
      }
      nodeLooper = nodeLooper.next;
    }

    return "Exception";
  }
  insertBefore(val, newVal) {
    let node = new Node(newVal);
    let nodeLooper = this.head;
    while (nodeLooper.next) {
      if (nodeLooper.next.value === val) {
        let temp = nodeLooper.next;
        this.length++;
        nodeLooper.next = node;
        node.next = temp;

        return;
      }
      nodeLooper = nodeLooper.next;
    }
    return "Exception";
  }
  kthFromEnd(k) {
    let nodeLooper = this.head;
    let position = this.length - 1 - k;
    let index = 0;
    while (nodeLooper) {
      if (position === index) {
        return nodeLooper.value;
      }
      nodeLooper = nodeLooper.next;
      index++;
    }
    return "Exception";
  }
}

module.exports = LinkedList;
