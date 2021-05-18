"user strict";

/**
 * shiftting an array with specified input
 * @module ArrayShift
 */
class ArrayShift {
  /**
   * calling the method that responsible for shoffting the array
   * @param {Array} array;
   * @param {any} num;
   * @returns shifted array after shifting
   */
  waiter(array, num) {
    let shifted = this.shifter(array, num);
    console.log("f", shifted);
    return shifted;
  }
  /**
   * shifting the input array against specified input
   * @param {Array} array;
   * @param {any} num;
   * @returns shifted output array after shifting the input array
   */
  shifter(array, num) {
    let index = this.index(array);
    let newArr = [];
    for (let i = 0; i < array.length + 1; i++) {
      if (i < index) {
        newArr[i] = array[i];
      }
      if (i == index) {
        newArr[i] = num;
      }
      if (i > index) {
        newArr[i] = array[i - 1];
      }
    }

    return newArr;
  }
  /**
   * calculate the middle index for input array
   * @param {Array} array
   * @returns middle index of the input array
   */
  index(array) {
    return Math.ceil(array.length / 2);
  }
}

module.exports = ArrayShift;
