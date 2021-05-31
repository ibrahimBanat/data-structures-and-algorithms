"use strict";
const Queue = require("../stacksAndQueues/Queue");

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  enqueue(animal) {
    if (animal.type === "cat") {
      this.cats.enqueue(animal);
    } else if (animal.type === "dog") {
      this.dogs.enqueue(animal);
    } else {
      console.log("animal type should be either dog or cat");
      return "animal type should be either dog or cat";
    }
  }
  dequeue(pref) {
    if (pref === "cat") {
      if (!this.cats.isEmpty()) {
        return this.cats.dequeue(pref);
      } else {
        return "sorry the cats shelter is empty";
      }
    } else if (pref === "dog") {
      if (!this.dogs.isEmpty()) {
        return this.dogs.dequeue(pref);
      } else {
        return "sorry the dogs shelter is empty";
      }
    } else {
      return null;
    }
  }
}
module.exports = AnimalShelter;
