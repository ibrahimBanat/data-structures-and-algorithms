"use strict";

const binarySearch = require("../array-binary-search");

describe("binary search", () => {
  describe("retrun index when", () => {
    it("array element is equal to search key or -1 if the element does not exist", () => {
      expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
      expect(binarySearch([4, 8, 15, 16, 23, 42], 42)).toStrictEqual(5);
      expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
    });
  });
});
