"use strict";
const Shift = require("../array-shift");

describe("array shift", () => {
  describe("to give shifted array when", () => {
    it("when the array input is with even length", () => {
      //arrange
      let iparray = [2, 4, 6, -8];
      let numb = 5;
      //act
      let shifterInctance = new Shift();
      //assert
      expect(shifterInctance.waiter(iparray, numb)).toStrictEqual([
        2, 4, 5, 6, -8,
      ]);
    });
    it("when the input array is with odd length", () => {
      //arrange
      let iparray = [42, 8, 15, 23, 42];
      let num = 16;
      //act
      let shifterInctance = new Shift();
      //assert
      expect(shifterInctance.waiter(iparray, num)).toStrictEqual([
        42, 8, 15, 16, 23, 42,
      ]);
    });
    it("when the input array have a length of 0", () => {
      //arrange
      let iparray = [];
      let num = 7;
      //act
      let shifterInctance = new Shift();
      //assert
      expect(shifterInctance.waiter(iparray, num)).toStrictEqual([7]);
    });
    it("when the input number is an array", () => {
      //arrange
      let iparray = [1, 2, 3, 4, 5];
      let num = [7, 9];
      //act
      let shifterInctance = new Shift();
      //assert
      expect(shifterInctance.waiter(iparray, num)).toStrictEqual([
        1,
        2,
        3,
        [7, 9],
        4,
        5,
      ]);
    });
    it("when the input number is not defined", () => {
      //arrange
      let iparray = [1, 2, 3, 4];
      let num;
      //act
      let shifterInctance = new Shift();
      //assert
      expect(shifterInctance.waiter(iparray, num)).toStrictEqual([
        1,
        2,
        undefined,
        3,
        4,
      ]);
    });
  });
});
