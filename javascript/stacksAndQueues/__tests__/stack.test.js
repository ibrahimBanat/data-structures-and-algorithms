"use strict";

const Stack = require("../Stack");
// jest.mock("../stacks-and-queues");
let stack = new Stack();
beforeEach(() => {
  stack = new Stack();
});

describe("stack testing", () => {
  it("Can successfully push onto a stack", () => {
    stack.push(5);
    expect(stack.size).toEqual(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    stack.push(5);
    stack.push(3);
    expect(stack.size).toEqual(2);
  });
  it("Can successfully pop off the stack", () => {
    jest.spyOn(stack, "push");
    jest.spyOn(stack, "pop");
    stack.push(5);
    stack.pop(5);
    expect(stack.pop).toHaveBeenCalledTimes(1);
    expect(stack.size).toEqual(0);
  });
  it("Can successfully peek the next item on the stack", () => {
    jest.spyOn(stack, "peek");
    stack.push(5);
    stack.push(6);
    stack.peek();
    expect(stack.peek).toHaveBeenCalledTimes(1);
    expect(stack.peek()).toEqual(stack.top);
  });
  it("Can successfully instantiate an empty stack", () => {
    expect(Object.keys(stack.storage).length).toBe(0);
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    expect(() => {
      stack.exceptEmpty();
    }).toThrow(Error);
  });
});
