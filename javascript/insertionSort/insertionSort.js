"use strict";

/**
 * takes an array of intgers as input and returns
 * and array of these intgers in sorted order from least ot the largest
 * @param {Array} array of intgers
 * @returns Array of sorted intgers
 */

function insertSort(array) {
  if (array.length === 0) {
    return "Exception";
  }

  for (let item = 1; item < array.length; item++) {
    for (let index = item; index > 0; index--) {
      if (array[index] < array[index - 1]) {
        const temp = array[index];
        array[index] = array[index - 1];
        array[index - 1] = temp;
      } else {
        break;
      }
    }
  }
  return array;
}

module.exports = insertSort;
