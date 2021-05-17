"user strict";

class ArrayShift {
  waiter(array, num) {
    let shifted = this.shifter(array, num);
    return shifted;
  }
  index(array) {
    return Math.ceil(array.length / 2);
  }

  shifter(array, num) {
    let index = this.index(array);
    let spliced = array.splice(index, 0, num);
    return spliced;
  }
}

module.exports = ArrayShift;
