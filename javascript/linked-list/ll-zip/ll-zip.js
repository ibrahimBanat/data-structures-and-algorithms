"use strict";

const LinkedList = require("../LinkedList");

function zipList(ll1, ll2) {
  if (ll1.length === 0 || ll2.length === 0 || ll1.length !== ll2.length) {
    return "Exception";
  }
  let current1 = ll1.head;
  let current2 = ll2.head;

  let ll1Length = ll1.length;
  let ll2Length = ll2.length;

  while (current1 && current2.next) {
    ll1.insertAfter(current1.value, current2.value);

    current1 = current1.next.next;
    current2 = current2.next;
  }
  if (ll1Length === ll2Length) {
    ll1.append(current2.value);
  } else if (ll1Length < ll2Length) {
    ll1.append(current2.value);
  } else if (ll1Length > ll2Length) {
    ll1.insertAfter(current1.value, current2.value);
  }
  return ll1;
}
module.exports = zipList;
