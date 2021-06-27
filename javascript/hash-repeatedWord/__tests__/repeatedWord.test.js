"use strict";

const repeatedWord = require("../repeatedWord");
const jhinBreathe = "Smiles, everyone, smiles !";
const jhin = "Each bullet is a piece of my soul. Each shot is a piece of me.";
const jhinFav = "In carnage, I bloom, like a flower at the dawn";

describe("Repeated Word Test", () => {
  it("should find the first word to occur more than once in a string", () => {
    expect(repeatedWord(jhinBreathe)).toBe("smiles");
    expect(repeatedWord(jhin)).toBe("each");
  });
  it("should return an exception if every word in the string is unique", () => {
    expect(repeatedWord(jhinFav)).toBe("no duplicate words!");
  });
});
