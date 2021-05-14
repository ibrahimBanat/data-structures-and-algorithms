"use strict";

/**
 * this class is for reversing an array
 * @module ReverseArray
 */

class ReverseArray {
  /**
   * calling the loopOverArray method
   * @param {Array} array the input array
   * @returns {Array} reversed the reversed array passed from the other method
   */
  reVerse(array) {
    //define empty array to contain the elements of input array with inversed order
    let template = [];
    let reversed = this.loopOverArray(array, template);
    return reversed;
  }

  /**
   * lopping over the inout array and return it in inversed order
   * @param {Array} array the input array
   * @param {Array} template empty array
   * @returns {Array} template filled with reversed order of array
   */
  loopOverArray(array, template) {
    for (let index = array.length - 1; index >= 0; index--) {
      template.push(array[index]);
    }
    return template;
  }
}
module.exports = ReverseArray;
