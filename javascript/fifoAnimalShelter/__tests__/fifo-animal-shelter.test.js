"use strict";
const AnimalShelter = require("../fifo-animal-shelter");
let animalSHelter = new AnimalShelter();

beforeEach(() => {
  animalSHelter = new AnimalShelter();
});

describe("Animal shelter", () => {
  it("should sucessfully enqueue cat to the shelter", () => {
    let animal = { type: "cat", name: "fedora" };
    let animal1 = { type: "cat", name: "sally" };
    let enqueue = jest.spyOn(animalSHelter, "enqueue");

    animalSHelter.enqueue(animal);
    animalSHelter.enqueue(animal1);
    expect(enqueue).toHaveBeenCalledTimes(2);
    expect(animalSHelter.cats.storage[0].value.name).toEqual("fedora");
  });
  it("should sucessfully enqueue dog to the shelter", () => {
    let animal = { type: "dog", name: "agad" };
    let enqueue = jest.spyOn(animalSHelter, "enqueue");
    animalSHelter.enqueue(animal);
    expect(enqueue).toHaveBeenCalledTimes(1);
    expect(animalSHelter.dogs.storage[0].value.name).toEqual("agad");
  });
  it("should sucessfully dequeue dog from the shelter", () => {
    let animal = { type: "dog", name: "agad" };
    let animal1 = { type: "dog", name: "saeed" };

    let dequeue = jest.spyOn(animalSHelter, "dequeue");

    animalSHelter.enqueue(animal);
    animalSHelter.enqueue(animal1);

    expect(animalSHelter.dequeue("dog").value.name).toEqual("agad");
    expect(dequeue).toHaveBeenCalledTimes(1);
  });
  it("should sucessfully dequeue cat from the shelter", () => {
    let animal = { type: "cat", name: "saeed" };
    let dequeue = jest.spyOn(animalSHelter, "dequeue");

    animalSHelter.enqueue(animal);

    expect(animalSHelter.dequeue("cat").value.name).toEqual("saeed");
    expect(dequeue).toHaveBeenCalledTimes(1);
  });
  it("should return null when enqueue other animal to the shelter", () => {
    let animal = { type: "human", name: "saeed" };
    let enqueue = jest.spyOn(animalSHelter, "enqueue");

    animalSHelter.enqueue(animal);

    expect(enqueue).toHaveBeenCalledTimes(1);
    expect(animalSHelter.enqueue(animal)).toEqual(
      "animal type should be either dog or cat"
    );
  });
  it("should Exception when dequeue from empty cat shelter", () => {
    let dequeu = jest.spyOn(animalSHelter, "dequeue");

    expect(animalSHelter.dequeue("cat")).toEqual(
      "sorry the cats shelter is empty"
    );
    expect(dequeu).toHaveBeenCalledTimes(1);
  });
  it("should Exception when dequeue from empty dog shelter", () => {
    let dequeue = jest.spyOn(animalSHelter, "dequeue");

    expect(animalSHelter.dequeue("dog")).toEqual(
      "sorry the dogs shelter is empty"
    );
    expect(dequeue).toHaveBeenCalledTimes(1);
  });
  it("should Exception when dequeue from empty other shelters", () => {
    let dequeue = jest.spyOn(animalSHelter, "dequeue");

    expect(animalSHelter.dequeue("human")).toEqual(null);
    expect(dequeue).toHaveBeenCalledTimes(1);
  });
});
