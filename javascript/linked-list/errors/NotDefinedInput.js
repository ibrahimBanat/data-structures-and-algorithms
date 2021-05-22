"use strict";

class NotDefinedInput extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = NotDefinedInput;
