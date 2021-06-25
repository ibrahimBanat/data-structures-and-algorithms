"use strict";

const mergeSort = require("../mergeSort");

describe("mergeSort", () => {
  it("should return expected outcome", () => {
    let array = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("should retrun expected exception", () => {
    let array = [];
    expect(mergeSort(array)).toEqual("exception");
  });
});
