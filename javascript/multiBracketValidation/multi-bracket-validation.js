"use strict";
const Stack = require("../stacksAndQueues/Stack");
class MultiBracketValidation {
  constructor() {
    this.stack = new Stack();
    this.opening = ["{", "(", "[", "<"];
    this.closing = ["}", ")", "]", ">"];
  }
  /**
   * this method checks if the paranthesis inside the string are balanced or not
   * @param {string} input string with paranthesis of type:any
   * @returns boolean true:balance paranthesis, false: non-balance paranthesis
   */
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
  /**
   * checks if the character-sympol is an opening paranthessis
   * @param {string} char char of a string
   * @returns boolean true: opening paranthesis, false: non-opening paranthesis
   */
  isOpening(char) {
    return this.opening.indexOf(char) >= 0;
  }
  /**
   * checks if the character-sympol is a closing paranthessis
   * @param {string} char char of a string
   * @returns boolean true: closing paranthesis, false: non-closing paranthesis
   */
  isClosing(char) {
    return this.closing.indexOf(char) >= 0;
  }
  /**
   * checks if the top of the stack pairs with the closing tag found in the string
   * @param {string} opening paranthesis from the top of the stack
   * @param {string} closing paranthesis
   * @returns boolean true: opening, closing are pairs.
   */
  isPair(opening, closing) {
    return this.closing.indexOf(closing) === this.opening.indexOf(opening);
  }
}
module.exports = MultiBracketValidation;
