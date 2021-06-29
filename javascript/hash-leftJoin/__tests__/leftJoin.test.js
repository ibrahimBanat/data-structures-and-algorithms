"use strict";

const HashTable = require("../../hashTables/hashTable");
const leftJoin = require("../leftJoin");

const hashTable1 = new HashTable();
const hashTable2 = new HashTable();
hashTable1.add("singer", "micheal buble");
hashTable1.add("Dancer", "Anna Pavlova");
hashTable2.add("singer", "Adele");
hashTable2.add("Actor", "Angelina Jolie");

describe("leftJoin test", () => {
  it("should successfully return list of left joined", () => {
    //Arrange
    const hashTable1 = new HashTable();
    const hashTable2 = new HashTable();
    hashTable1.add("singer", "Mikael Åkerfeldt");
    hashTable1.add("Drummer", "Martin Axenrot");
    hashTable2.add("singer", "Anders Jacobsson");
    hashTable2.add("FictionCharacter", "Johnny cage");

    expect(leftJoin(hashTable1, hashTable2)).toEqual([
      ["Drummer", "Martin Axenrot", null],
      ["singer", "Mikael Åkerfeldt", "Anders Jacobsson"],
    ]);
  });
  it("should return null as exception for edge case", () => {
    const hashTable1 = new HashTable();
    const hashTable2 = new HashTable();
    hashTable1.add("singer", "micheal buble");
    hashTable1.add("Dancer", "Anna Pavlova");
    hashTable2.add("singer", "Adele");
    hashTable2.add("Actor", "Angelina Jolie");

    expect(leftJoin(hashTable1)).toEqual(null);
  });
});
