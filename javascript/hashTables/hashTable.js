"use strict";

const LinkedList = require("./LinkedList");

class HashTable {
  table = new Array(50);

  add(key, value) {
    let hash = this.hash(key);

    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].add({ key, value });
  }
  hash(key) {
    const hash = 50;
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += hash * total + key.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length - 1;
    }
    return parseInt(total);
  }

  contains(key) {
    let hash = this.hash(key);
    if (this.table[hash]) {
      return true;
    }
    return false;
  }
  get(key) {
    let hash = this.hash(key);
    if (this.table[hash]) {
      return this.table[hash];
    } else {
      return null;
    }
  }
}

module.exports = HashTable;
