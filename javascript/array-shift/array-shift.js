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

    return shifted;
  }
  /**
   * shifting the input array against specified input
   * @param {Array} array;
   * @param {any} num;
   * @returns array input array after shifting
   */
  shifter(array, num) {
    let index = this.index(array);
    array.splice(index, 0, num);
    return array;
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
