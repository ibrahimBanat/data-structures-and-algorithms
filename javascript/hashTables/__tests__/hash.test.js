"use strict";
const HashTable = require("../hashTable");

describe("hashTble", () => {
  it("should sucessfully create a hash table", () => {
    //Arrange
    let hashTable = new HashTable(50);
    //Assert
    expect(hashTable.table.length).toEqual(50);
  });
  it("should sucessfully add to the hased table", () => {
    //Arrange
    let hashTable = new HashTable(50);
    let key = "creator";
    //Act
    hashTable.add(key, 503);
    //Arrange
    expect(hashTable.table[hashTable.hash(key)]).toBeDefined();
  });
  it("Should Retrieving based on a key returns the value stored", () => {
    //Arrange
    let hashTable = new HashTable(50);
    //Act
    hashTable.add("character", "akali");
    let val = hashTable.get("character");
    //Assert
    expect(val.head.value.key).toEqual("character");
  });
  it("Should return null if the key is not in the table", () => {
    let hashTable = new HashTable();

    expect(hashTable.get("chessPlayer")).toBeNull();
  });
  it("Should successfully handle a collision within the hashtable", () => {
    let hashTable = new HashTable(50);
    hashTable.add("character", "aphelios");
    hashTable.add("character", "akali");
    let bucket = hashTable.get("character");
    expect(bucket.head.next.value.value).toEqual("akali");
  });
  it("Should successfully hash a key to an in-range value", () => {
    let hashTable = new HashTable();
    hashTable.add("character", "leblanc");
    const value = hashTable.hash("character");
    expect(value).toBeLessThan(50);
  });
});
