"use strict";

function quickSort(array, left, right) {
  if (left < right) {
    let position = partition(array, left, right);
    quickSort(array, left, position - 1);
    quickSort(array, position + 1, right);
  }
  return array;
}

function partition(array, left, right) {
  let pivot = array[right];
  let least = left - 1;
  for (let index = left; index < right; index++) {
    if (array[index] <= pivot) {
      least++;
      swap(array, index, least);
    }
  }
  swap(array, right, least + 1);
  return least + 1;
}
function swap(array, index, least) {
  let temp;
  temp = array[index];
  array[index] = array[least];
  array[least] = temp;
}

module.exports = quickSort;
