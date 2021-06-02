"use strict";
const Queue = require("../stacksAndQueues/Queue");

class DuckDuck {
  constructor() {
    this.queue = new Queue();
    this.temp = "";
    this.iteration = 0;
  }
  /**
   * function decide who is the winner depending on the step and the list
   * @param {Array} array list of string to play with and find the winner of
   * @param {Number} iteration represents the step for deleting the item from the list
   * @returns item string represents the winner
   */
  duckDuckGoose(array, iteration) {
    if (array.length !== 0) {
      this.iteration = iteration;
      this.inputs(array);
    } else {
      return "input list string should have values";
    }
    while (this.queue.size() !== 1) {
      this.takeGoose(this.iteration);
    }
    return `winner is ${this.queue.dequeue().value}`;
  }
  /**
   * enqueue items to the queue
   * @param {*} array list of strings need to be added to the queue
   */
  inputs(array) {
    for (let index = 0; index < array.length; index++) {
      this.queue.enqueue(array[index]);
    }
  }
  /**
   * takes in a step and iterate over the queue, enqueue and dequeue till the index of the item matches the step
   * @param {Number} number represents the step for each round
   */
  takeGoose(number) {
    //0-2
    for (let index = 0; index < number - 1; index++) {
      this.temp = this.queue.dequeue();
      this.queue.enqueue(this.temp.value);
    }
    this.queue.dequeue();
  }
}
module.exports = DuckDuck;
