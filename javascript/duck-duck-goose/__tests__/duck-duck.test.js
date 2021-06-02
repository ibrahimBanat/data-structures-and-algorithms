"use strict";

const DuckDuck = require("../duck-duck");
let duck = new DuckDuck();

beforeEach(() => {
  duck = new DuckDuck();
});

describe("duck duck game", () => {
  it("should called every method sucessfully", () => {
    jest.spyOn(duck, "duckDuckGoose");
    duck.duckDuckGoose(["a", "b"], 2);
    expect(duck.duckDuckGoose).toHaveBeenCalledTimes(1);
  });
  it("should return exception when enter an empty array", () => {
    expect(duck.duckDuckGoose([], 2)).toEqual(
      "input list string should have values"
    );
  });
  it("should return a winner when entering an array", () => {
    let array = ["A", "B", "C", "D", "E"];
    let winner = duck.duckDuckGoose(array, 3);
    expect(winner).toEqual("winner is D");
  });
});
