"use strict";
const Queue = require("../PseudoQueue");
let queue = new Queue();
beforeEach(() => {
  //arrange
  queue = new Queue();
});

describe("Pseudo Queue", () => {
  it("shoudl return `Happy path` - expected outcome for enqueue", () => {
    //arrange

    //act
    queue.enqueue(10);
    queue.enqueue(20);
    //assert
    expect(queue.pushStack.peek().value).toEqual(20);
  });

  it("shoudl return `Happy path` - expected outcome for dequeue", () => {
    queue.enqueue(10);
    queue.dequeue();

    expect(queue.popStack.isEmpty()).toBe(true);
  });
  it("shoudl return `Happy path` - expected outcome for peek", () => {
    queue.enqueue(10);
    queue.enqueue(100);

    expect(queue.peek().value.value).toEqual(10);
  });
  it("shoudl return `Exception` - when dequeue from an empty stack", () => {
    expect(queue.dequeue()).toEqual("Exception");
  });
  it("shoudl return `Exception` - when peek on an empty stack", () => {
    expect(queue.peek()).toEqual("Exception");
  });
});
