"use strict";
const Stack = require("../stacksAndQueues/Stack");
class MultiBracketValidation {
  constructor() {
    this.stack = new Stack();
    this.opening = ["{", "(", "[", "<"];
    this.closing = ["}", ")", "]", ">"];
  }
  checkForValidation(input) {
    for (const char of input) {
      if (this.isOpening(char)) {
        this.stack.push(char);
      } else if (this.isClosing(char)) {
        if (
          this.stack.isEmpty() ||
          !this.isPair(this.stack.peek().value, char)
        ) {
          return false;
        } else {
          this.stack.pop();
        }
      }
    }
    return this.stack.isEmpty();
  }
  isOpening(char) {
    return this.opening.indexOf(char) >= 0;
  }
  isClosing(char) {
    return this.closing.indexOf(char) >= 0;
  }
  isPair(opening, closing) {
    return this.closing.indexOf(closing) === this.opening.indexOf(opening);
  }
}
module.exports = MultiBracketValidation;
