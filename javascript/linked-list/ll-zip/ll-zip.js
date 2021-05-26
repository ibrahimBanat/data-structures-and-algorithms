"use strict";

const LinkedList = require("../LinkedList");

function zipList(ll1, ll2) {
  let linkedList = new LinkedList();
  let current1 = ll1.head;
  let current2 = ll2.head;
  let length = ll1.length + ll2.length;

  if (length === 0 || ll1.length !== ll2.length) {
    return "Exception";
  }
  for (let index = 0; index < length; index++) {
    if (index % 2 !== 0) {
      linkedList.append(current2.value);
      current2 = current2.next;
    }
    if (index % 2 === 0) {
      linkedList.append(current1.value);
      current1 = current1.next;
    }
  }
  console.log(linkedList);
  return linkedList;
}
module.exports = zipList;
