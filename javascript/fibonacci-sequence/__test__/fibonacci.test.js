"use strict";
let index = require("../fibonacci");
describe("Fiboncci Sequence", () => {
  test("input is a normal number", () => {
    let instance = new index.Fib();

    let input = instance.findSum(6);
    expect(input).toEqual(8);
  });
  test("input number is negative", () => {
    let instance = new index.Fib();

    let input = instance.findSum(-1);
    expect(input).toEqual(0);
  });
  test("big number", () => {
    let instance = new index.Fib();

    let input = instance.findSum(-1);
    expect(input).toEqual(0);
  });
  test("1 as input", () => {
    let instance = new index.Fib();

    let input = instance.findSum(1);
    expect(input).toEqual(1);
  });
  test("zero as input", () => {
    let instance = new index.Fib();

    let input = instance.findSum(0);
    expect(input).toEqual(0);
  });
});
