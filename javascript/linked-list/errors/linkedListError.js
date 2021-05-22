"use strict";
const NotDefinedInput = require("./NotDefinedInput");

class LinkedListErrors {
  notDefinedInput(message) {
    throw new NotDefinedInput(message);
  }
}

module.exports = LinkedListErrors;
