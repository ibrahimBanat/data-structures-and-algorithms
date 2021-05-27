"use strict";

const reverse = require("./reverse-list");
/**
 * given singly linkedList and given if it's palindrome or not
 * @param {ListNode} head head of linkelist
 * @return {boolean} boolean true if it's palindrome otherwise false
 */
function isPalindrome(head) {
  //define fast pointer which steps two steps every time
  let fast = head;
  //define slow pointer wich will step one step every time
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = head;
  slow = reverse(slow);

  while (slow !== null) {
    if (slow.value !== fast.value) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
}
module.exports = isPalindrome;
