function mergeSort(array) {
  if (array.length === 0) {
    return "exception";
  } else {
    let n = array.length;
    let mid = Math.floor(n / 2);
    if (1 < n) {
      let left = array.slice(0, mid);
      let right = array.slice(mid);
      mergeSort(left);
      mergeSort(right);
      merge(left, right, array);
    }
    return array;
  }

  function merge(left, right, array) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (j < right.length && i < left.length) {
      if (left[i] <= right[j]) {
        array[k] = left[i];
        i++;
      } else {
        array[k] = right[j];
        j++;
      }
      k++;
    }
    if (i === left.length) {
      array[k] = right[j];
      j++;
      k++;
    } else {
      array[k] = left[i];
      i++;
      k++;
    }
  }
}

module.exports = mergeSort;
