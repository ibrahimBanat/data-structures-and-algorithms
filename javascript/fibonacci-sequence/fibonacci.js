"use strict";

class Fib {
  constructor(limiter) {
    this.perviousState = 0;
    this.oldState = 1;
    this.sum = 0;
  }

  findSum(limit) {
    let index = 0; // n > 0
    while (index < limit) {
      this.sum = this.perviousState + this.oldState;
      this.oldState = this.perviousState;
      this.perviousState = this.sum;
      // console.log(index);
      index++;
    }
    return this.sum;
  }
}

// let instance = new Fib();

module.exports = {
  Fib,
};
