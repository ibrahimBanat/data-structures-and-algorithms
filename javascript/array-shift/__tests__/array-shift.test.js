"use strict";
const Shift = require("../array-shift");

describe("array shift", () => {
  describe("to give output when", () => {
    it("have the values", () => {
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
  });
});
