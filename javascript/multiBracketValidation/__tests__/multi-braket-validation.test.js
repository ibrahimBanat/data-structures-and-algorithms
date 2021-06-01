"use strict";

const Validation = require("../multi-bracket-validation");
let validation = new Validation();
beforeEach(() => {
  validation = new Validation();
});

describe("check for multi bracket validation", () => {
  it("should sucessfully return true for balanced paranthesis", () => {
    //act
    let expression = validation.checkForValidation("(asdf)");
    expect(expression).toEqual(true);
  });
  it("should sucessfully return false for unbalanced paranthesis", () => {
    //act
    let expression = validation.checkForValidation("(asdf)}");
    expect(expression).toEqual(false);
  });
  it("should sucessfully return false for string started with closing paranth", () => {
    //act
    let expression = validation.checkForValidation("]hello");
    expect(expression).toEqual(false);
  });
  it("should sucessfully return true for right multi nested paranth", () => {
    //act
    let expression = validation.checkForValidation(
      "asdf[assas{dsaf(fsdaf<sdaf>fasdad)sdfsd}sadf]adsf"
    );
    expect(expression).toEqual(true);
  });
});
