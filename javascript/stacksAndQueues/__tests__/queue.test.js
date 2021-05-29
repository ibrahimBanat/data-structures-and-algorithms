"use strict";

const Queue = require("../Queue");
let queue = new Queue();

beforeEach(() => {
  queue = new Queue();
});

describe("Queues testing", () => {
  it("Can successfully enqueue into a queue", () => {
    queue.enqueue(5);
    expect(queue.size()).toEqual(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    queue.enqueue(5);
    queue.enqueue(3);
    expect(queue.size()).toEqual(2);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    jest.spyOn(queue, "dequeue");
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.dequeue();
    expect(queue.dequeue).toHaveBeenCalledTimes(1);
    expect(queue.dequeue().value).toEqual(20);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    jest.spyOn(queue, "peek");
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.peek();
    expect(queue.peek).toHaveBeenCalledTimes(1);
    expect(queue.peek().value).toEqual(queue.storage[queue.bottom].value);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    jest.spyOn(queue, "dequeue");
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.dequeue();
    queue.dequeue();

    expect(queue.dequeue).toHaveBeenCalledTimes(2);
    expect(queue.dequeue().value).toEqual(30);
  });
  it("Can successfully instantiate an empty queue", () => {
    expect(Object.keys(queue.storage).length).toBe(0);
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    expect(() => {
      queue.exceptEmpty();
    }).toThrow(Error);
  });
});
