"use strict";

const insertionSort = require("../insertionSort");

describe("insertion sort testing", () => {
  it("should sucessfully return sorted array", () => {
    //arrange
    let array = [8, 4, 23, 42, 16, 15];
    //act
    let sorted = insertionSort(array);
    //assert
    expect(sorted.length).toEqual(6);
    expect(sorted[0]).toEqual(4);
    expect(sorted).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("should return exception when passing empty array", () => {
    //arrange
    let arr = [];
    //act
    let sorted = insertionSort(arr);
    //assert
    expect(sorted).toEqual("Exception");
  });
});
