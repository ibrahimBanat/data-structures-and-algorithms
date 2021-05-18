"use strict";

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let center = Math.floor((start + end) / 2);
    if (sortedArray[center] === key) {
      return center;
    } else {
      if (sortedArray[center] < key) {
        start = center + 1;
      } else {
        end = center - 1;
      }
    }
  }
  return -1;
}

module.exports = binarySearch;
